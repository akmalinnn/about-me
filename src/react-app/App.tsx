import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { contentByLang } from "./content";
import { useLanguage } from "./language-context";
import { useI18n } from "./i18n";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ResumePage } from "./pages/ResumePage";

function App() {
	const { lang } = useLanguage();
	const content = contentByLang[lang];
	const t = useI18n();

	return (
		<Layout contacts={content.profile.contacts} t={t}>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							profile={content.profile}
							aboutHtml={content.aboutHtml}
							focus={content.focus}
							t={t}
						/>
					}
				/>
				<Route
					path="/portfolio"
					element={<PortfolioPage projects={content.projects} t={t} />}
				/>
				<Route
					path="/resume"
					element={
						<ResumePage
							experience={content.experience}
							education={content.education}
							skills={content.skills}
							t={t}
						/>
					}
				/>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Layout>
	);
}

export default App;
