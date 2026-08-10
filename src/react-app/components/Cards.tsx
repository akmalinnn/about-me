import type { CardItem } from "../content";

function Card({ item }: { item: CardItem }) {
	return (
		<article className="card">
			{item.category && <span className="card-category">{item.category}</span>}
			<h3 className="card-title">{item.title}</h3>
			<div className="card-meta">
				{item.metaKeys
					.filter((key) => key !== "Category")
					.map((key) => (
						<span key={key} className="card-badge">
							{item.meta[key]}
						</span>
					))}
			</div>
			{item.bodyHtml && (
				<div className="card-body prose" dangerouslySetInnerHTML={{ __html: item.bodyHtml }} />
			)}
		</article>
	);
}

export function CardList({ items }: { items: CardItem[] }) {
	return (
		<div className="cards">
			{items.map((item) => (
				<Card key={item.title} item={item} />
			))}
		</div>
	);
}
