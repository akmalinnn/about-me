import type { ReactNode } from "react";

interface SectionProps {
	id?: string;
	title: string;
	number?: string;
	children: ReactNode;
	className?: string;
}

export function Section({ id, title, number, children, className = "" }: SectionProps) {
	return (
		<section id={id} className={`section ${className}`.trim()}>
			<h2 className="section-title">
				<span className="section-title-marker" aria-hidden="true">
					◆
				</span>
				<span className="section-title-text">{title}</span>
				{number && <span className="section-title-num">{number}</span>}
			</h2>
			{children}
		</section>
	);
}
