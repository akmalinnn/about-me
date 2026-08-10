import { useState } from "react";
import type { CardItem } from "../content";
import type { Strings } from "../i18n";
import { CardList } from "../components/Cards";
import { Section } from "../components/Section";

export function PortfolioPage({ projects, t }: { projects: CardItem[]; t: Strings }) {
	const categories = Array.from(
		new Set(projects.map((p) => p.category).filter((c): c is string => Boolean(c))),
	);
	const [active, setActive] = useState<string>("All");

	const visible =
		active === "All" ? projects : projects.filter((p) => p.category === active);

	return (
		<Section title={t.portfolio} number="01">
			<p className="page-intro">{t.portfolioIntro}</p>

			{categories.length > 0 && (
				<div className="filter-chips">
					<button
						type="button"
						className={`chip-filter${active === "All" ? " active" : ""}`}
						onClick={() => setActive("All")}
					>
						{t.all}
					</button>
					{categories.map((c) => (
						<button
							type="button"
							key={c}
							className={`chip-filter${active === c ? " active" : ""}`}
							onClick={() => setActive(c)}
						>
							{c}
						</button>
					))}
				</div>
			)}

			<CardList items={visible} />
		</Section>
	);
}
