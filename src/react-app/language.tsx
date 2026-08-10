import { useState, type ReactNode } from "react";
import { LanguageContext } from "./language-context";
import type { Language } from "./content";

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Language>(() => {
		if (typeof window === "undefined") return "en";
		const stored = window.localStorage.getItem("lang");
		if (stored === "en" || stored === "id" || stored === "ja") return stored;
		return "en";
	});

	const update = (next: Language) => {
		setLang(next);
		window.localStorage.setItem("lang", next);
	};

	return (
		<LanguageContext.Provider value={{ lang, setLang: update }}>
			{children}
		</LanguageContext.Provider>
	);
}
