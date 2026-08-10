import type { Strings } from "../i18n";
import { Section } from "./Section";

export function About({ html, t }: { html: string; t: Strings }) {
	return (
		<Section id="about" title={t.about} number="01">
			<div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
		</Section>
	);
}
