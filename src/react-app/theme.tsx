import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./theme-context";

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window === "undefined") return "light";
		const stored = window.localStorage.getItem("theme");
		if (stored === "light" || stored === "dark") return stored;
		return "light";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		window.localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{ theme, toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")) }}
		>
			{children}
		</ThemeContext.Provider>
	);
}
