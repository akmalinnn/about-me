import { createContext, useContext } from "react";
import type { Language } from "./content";

export interface LanguageContextValue {
	lang: Language;
	setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
	lang: "en",
	setLang: () => {},
});

export function useLanguage() {
	return useContext(LanguageContext);
}
