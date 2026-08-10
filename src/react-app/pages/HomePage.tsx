import type { CardItem, Profile } from "../content";
import type { Strings } from "../i18n";
import { About } from "../components/About";
import { Focus } from "../components/Focus";
import { Hero } from "../components/Hero";

export function HomePage({
	profile,
	aboutHtml,
	focus,
	t,
}: {
	profile: Profile;
	aboutHtml: string;
	focus: CardItem[];
	t: Strings;
}) {
	return (
		<>
			<Hero profile={profile} t={t} />
			<About html={aboutHtml} t={t} />
			<Focus items={focus} t={t} />
		</>
	);
}
