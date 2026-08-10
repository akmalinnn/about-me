import { Link } from "react-router-dom";
import type { StatItem } from "../content";
import type { Strings } from "../i18n";
import { Section } from "./Section";

export function Stats({ stats, t }: { stats: StatItem[]; t: Strings }) {
	return (
		<Section title={t.numbers} number="02">
			<div className="stats-grid">
				{stats.map((s) => {
					const inner = (
						<>
							<span className="stat-value">{s.value}</span>
							<span className="stat-label">{s.label}</span>
						</>
					);
					return s.link ? (
						<Link key={s.label} className="stat-card" to={s.link}>
							{inner}
						</Link>
					) : (
						<div key={s.label} className="stat-card">
							{inner}
						</div>
					);
				})}
			</div>
		</Section>
	);
}
