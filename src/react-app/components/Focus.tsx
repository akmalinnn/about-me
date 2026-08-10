import type { CardItem } from "../content";
import type { Strings } from "../i18n";
import { Section } from "./Section";
import { FocusIcon } from "./icons";

export function Focus({ items, t }: { items: CardItem[]; t: Strings }) {
	return (
		<Section title={t.doing} number="02">
			<div className="focus-grid">
				{items.map((item) => (
					<article key={item.title} className="focus-card">
						<div className="focus-card-icon">
							<FocusIcon name={item.icon} width={22} height={22} />
						</div>
						<div>
							<h3 className="focus-card-title">{item.title}</h3>
							{item.bodyHtml && (
								<div className="focus-card-text" dangerouslySetInnerHTML={{ __html: item.bodyHtml }} />
							)}
						</div>
					</article>
				))}
			</div>
		</Section>
	);
}
