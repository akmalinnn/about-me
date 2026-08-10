import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme-context";
import { useLanguage } from "../language-context";
import { languages, type ContactLink, type Language } from "../content";
import type { Strings } from "../i18n";import {
	CloseIcon,
	ContactIcon,
	MenuIcon,
	MoonIcon,
	SunIcon,
} from "./icons";
import { BackToTop } from "./BackToTop";

interface LayoutProps {
	children: React.ReactNode;
	contacts: ContactLink[];
	t: Strings;
}

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			type="button"
			className="theme-toggle"
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
		>
			{theme === "light" ? <MoonIcon width={18} height={18} /> : <SunIcon width={18} height={18} />}
		</button>
	);
}

function LanguageSwitcher() {
	const { lang, setLang } = useLanguage();
	return (
		<div className="lang-switch" role="group" aria-label="Language">
			{languages.map((l) => (
				<button
					type="button"
					key={l.code}
					className={`lang-btn${lang === l.code ? " active" : ""}`}
					onClick={() => setLang(l.code as Language)}
					title={l.native}
				>
					{l.label}
				</button>
			))}
		</div>
	);
}

export function Layout({ children, contacts, t }: LayoutProps) {
	const [open, setOpen] = useState(false);
	const navItems = [
		{ label: t.navHome, to: "/" },
		{ label: t.navPortfolio, to: "/portfolio" },
		{ label: t.navResume, to: "/resume" },
	];

	return (
		<div className="layout">
			<header className="header">
				<nav className="nav">
					<ul className="nav-links">
						{navItems.map((item) => (
							<li key={item.to}>
								<NavLink
									className={({ isActive }) =>
										`nav-link${isActive ? " active" : ""}`
									}
									to={item.to}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>

					<div className="nav-actions">
						<LanguageSwitcher />
						<ThemeToggle />
						<button
							type="button"
							className="nav-burger"
							onClick={() => setOpen((o) => !o)}
							aria-label="Toggle menu"
							aria-expanded={open}
						>
							{open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
						</button>
					</div>
				</nav>

				{open && (
					<ul className="nav-mobile">
						{navItems.map((item) => (
							<li key={item.to}>
								<NavLink
									className={({ isActive }) =>
										`nav-link${isActive ? " active" : ""}`
									}
									to={item.to}
									onClick={() => setOpen(false)}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				)}
			</header>

			<main className="main">{children}</main>

			<footer className="footer">
				<div className="footer-links">
					{contacts.map((c) => (
						<a
							key={c.url}
							className="footer-link"
							href={c.url}
							target="_blank"
							rel="noreferrer"
						>
							<ContactIcon label={c.label} width={16} height={16} />
							{c.label}
						</a>
					))}
				</div>
				<p className="footer-note">{t.footerNote}</p>
			</footer>

			<BackToTop />
		</div>
	);
}
