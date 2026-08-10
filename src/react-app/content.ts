import profileEn from "../../content/en/profile.md?raw";
import aboutEn from "../../content/en/about.md?raw";
import skillsEn from "../../content/en/skills.md?raw";
import experienceEn from "../../content/en/experience.md?raw";
import projectsEn from "../../content/en/projects.md?raw";
import educationEn from "../../content/en/education.md?raw";
import statsEn from "../../content/en/stats.md?raw";
import focusEn from "../../content/en/focus.md?raw";

import profileId from "../../content/id/profile.md?raw";
import aboutId from "../../content/id/about.md?raw";
import skillsId from "../../content/id/skills.md?raw";
import experienceId from "../../content/id/experience.md?raw";
import projectsId from "../../content/id/projects.md?raw";
import educationId from "../../content/id/education.md?raw";
import statsId from "../../content/id/stats.md?raw";
import focusId from "../../content/id/focus.md?raw";

import profileJa from "../../content/ja/profile.md?raw";
import aboutJa from "../../content/ja/about.md?raw";
import skillsJa from "../../content/ja/skills.md?raw";
import experienceJa from "../../content/ja/experience.md?raw";
import projectsJa from "../../content/ja/projects.md?raw";
import educationJa from "../../content/ja/education.md?raw";
import statsJa from "../../content/ja/stats.md?raw";
import focusJa from "../../content/ja/focus.md?raw";

import profileImg from "../../content/profile.jpg";
import cvPdf from "../../content/cv.pdf";

import { renderMarkdown } from "./markdown";

export type Language = "en" | "id" | "ja";

export interface LanguageMeta {
	code: Language;
	label: string;
	native: string;
}

export interface ContactLink {
	label: string;
	url: string;
}

export interface Profile {
	name: string;
	title: string;
	bio: string;
	bioHtml: string;
	roles: string[];
	signal: { status: string; tz: string; response: string };
	contacts: ContactLink[];
}

export interface SkillCategory {
	name: string;
	skills: string[];
}

export interface CardItem {
	title: string;
	meta: Record<string, string>;
	metaKeys: string[];
	body: string;
	bodyHtml: string;
	category?: string;
	icon?: string;
}

export interface StatItem {
	value: string;
	label: string;
	link?: string;
}

export interface PortfolioContent {
	profile: Profile;
	aboutHtml: string;
	skills: SkillCategory[];
	experience: CardItem[];
	projects: CardItem[];
	education: CardItem[];
	stats: StatItem[];
	focus: CardItem[];
}

export const languages: LanguageMeta[] = [
	{ code: "en", label: "EN", native: "English" },
	{ code: "id", label: "ID", native: "Bahasa Indonesia" },
	{ code: "ja", label: "日本語", native: "日本語" },
];

export const profileImage = profileImg;
export const cvPdfUrl = cvPdf;

const CONTACT_RE = /^-\s*(.+?):\s*\[([^\]]+)\]\(([^)]+)\)$/;
const META_RE = /^\*\*(.+?):\*\*\s*(.+)$/;

interface RawContent {
	profile: string;
	about: string;
	skills: string;
	experience: string;
	projects: string;
	education: string;
	stats: string;
	focus: string;
}

function parseProfile(raw: string): Profile {
	const lines = raw.split(/\r?\n/);
	const name = lines[0]?.replace(/^#\s*/, "").trim() ?? "";
	const title = lines[1]?.trim() ?? "";

	const sectionIndex = (name: string) =>
		lines.findIndex((l) => l.trim() === name);
	const rolesStart = sectionIndex("## Roles");
	const signalStart = sectionIndex("## Signal");
	const contactStart = sectionIndex("## Contact");

	const bioEnd = rolesStart === -1 ? lines.length : rolesStart;
	const bio = lines.slice(2, bioEnd).join("\n").trim();

	const roleLine = (start: number, end: number): string[] => {
		if (start === -1) return [];
		const endIdx = end === -1 ? lines.length : end;
		return lines
			.slice(start + 1, endIdx)
			.map((l) => l.trim())
			.filter((l) => l.startsWith("- "))
			.map((l) => l.replace(/^-\s*/, "").trim());
	};

	const roles = roleLine(rolesStart, signalStart);

	const signalValues: Record<string, string> = {};
	if (signalStart !== -1) {
		for (let i = signalStart + 1; i < lines.length; i++) {
			const line = lines[i].trim();
			if (line.startsWith("## ")) break;
			const m = line.match(/^-\s*([^:]+):\s*(.+)$/);
			if (m) signalValues[m[1].trim().toLowerCase()] = m[2].trim();
		}
	}

	const contacts: ContactLink[] = [];
	if (contactStart !== -1) {
		for (let i = contactStart; i < lines.length; i++) {
			const match = lines[i].match(CONTACT_RE);
			if (match) {
				contacts.push({ label: match[2].trim(), url: match[3].trim() });
			}
		}
	}

	return {
		name,
		title,
		bio,
		bioHtml: renderMarkdown(bio),
		roles,
		signal: {
			status: signalValues.status ?? "Available",
			tz: signalValues.tz ?? "GMT+7",
			response: signalValues.response ?? "<24h",
		},
		contacts,
	};
}

function parseSkills(raw: string): SkillCategory[] {
	const blocks = raw.split(/(?=^##\s)/m);
	const categories: SkillCategory[] = [];

	for (const block of blocks) {
		const lines = block.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
		const heading = lines.shift() ?? "";
		if (!heading.startsWith("## ")) continue;

		const skills = lines
			.filter((l) => l.startsWith("- "))
			.map((l) => l.replace(/^-\s+/, "").trim());

		categories.push({ name: heading.replace(/^##\s*/, "").trim(), skills });
	}

	return categories;
}

function parseCards(raw: string): CardItem[] {
	const blocks = raw.split(/(?=^###\s)/m);
	const cards: CardItem[] = [];

	for (const block of blocks) {
		const lines = block.split(/\r?\n/);
		const first = lines.shift() ?? "";
		if (!first.trim().startsWith("### ")) continue;

		const title = first.replace(/^###\s*/, "").trim();
		const meta: Record<string, string> = {};
		const metaKeys: string[] = [];

		for (const line of lines) {
			const match = line.match(META_RE);
			if (match) {
				meta[match[1].trim()] = match[2].trim();
				metaKeys.push(match[1].trim());
			}
		}

		const metaLines = new Set(metaKeys);
		const body = lines
			.filter((l) => {
				const m = l.match(META_RE);
				return !(m && metaLines.has(m[1].trim()));
			})
			.join("\n")
			.trim();

		cards.push({
			title,
			meta,
			metaKeys,
			body,
			bodyHtml: renderMarkdown(body),
			category: meta["Category"],
			icon: meta["Icon"]?.toLowerCase(),
		});
	}

	return cards;
}

function parseStats(raw: string): StatItem[] {
	const stats: StatItem[] = [];
	for (const line of raw.split(/\r?\n/)) {
		const t = line.trim();
		if (!t.startsWith("- ")) continue;
		const parts = t
			.replace(/^-\s*/, "")
			.split("|")
			.map((s) => s.trim());
		if (parts.length >= 2) {
			stats.push({ value: parts[0], label: parts[1], link: parts[2] || undefined });
		}
	}
	return stats;
}

function buildContent(raw: RawContent): PortfolioContent {
	return {
		profile: parseProfile(raw.profile),
		aboutHtml: renderMarkdown(raw.about),
		skills: parseSkills(raw.skills),
		experience: parseCards(raw.experience),
		projects: parseCards(raw.projects),
		education: parseCards(raw.education),
		stats: parseStats(raw.stats),
		focus: parseCards(raw.focus),
	};
}

export const contentByLang: Record<Language, PortfolioContent> = {
	en: buildContent({
		profile: profileEn,
		about: aboutEn,
		skills: skillsEn,
		experience: experienceEn,
		projects: projectsEn,
		education: educationEn,
		stats: statsEn,
		focus: focusEn,
	}),
	id: buildContent({
		profile: profileId,
		about: aboutId,
		skills: skillsId,
		experience: experienceId,
		projects: projectsId,
		education: educationId,
		stats: statsId,
		focus: focusId,
	}),
	ja: buildContent({
		profile: profileJa,
		about: aboutJa,
		skills: skillsJa,
		experience: experienceJa,
		projects: projectsJa,
		education: educationJa,
		stats: statsJa,
		focus: focusJa,
	}),
};
