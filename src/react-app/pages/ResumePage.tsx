import type { CardItem, SkillCategory } from "../content";
import type { Strings } from "../i18n";
import { CardList } from "../components/Cards";
import { Section } from "../components/Section";

export function ResumePage({
	experience,
	education,
	skills,
	t,
}: {
	experience: CardItem[];
	education: CardItem[];
	skills: SkillCategory[];
	t: Strings;
}) {
	return (
		<>
			<Section title={t.experience} number="01">
				<CardList items={experience} />
			</Section>

			<Section title={t.education} number="02">
				<CardList items={education} />
			</Section>

			<Section id="skills" title={t.skills} number="03">
				<div className="skill-groups">
					{skills.map((category) => (
						<div key={category.name} className="skill-group">
							<h3 className="skill-group-title">{category.name}</h3>
							<ul className="chips">
								{category.skills.map((skill) => (
									<li key={skill} className="chip">
										{skill}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Section>
		</>
	);
}
