import type { Profile } from "../content";
import { profileImage, cvPdfUrl } from "../content";
import type { Strings } from "../i18n";
import { ContactIcon, DownloadIcon } from "./icons";
import { Terminal } from "./Terminal";

export function Hero({ profile, t }: { profile: Profile; t: Strings }) {
	return (
		<section id="top" className="hero">
			<div className="hero-inner">
				<div className="hero-main">
					<div className="hero-identity">
						<img className="hero-photo" src={profileImage} alt={profile.name} />
						<div className="hero-name">{profile.name}</div>
					</div>

					<div className="hero-action">
						<a
							className="cv-btn"
							href={cvPdfUrl}
							download="Akmal-Nafis-Resume.pdf"
						>
							<DownloadIcon width={16} height={16} />
							{t.downloadCv}
						</a>
					</div>

					<div
						className="hero-bio"
						dangerouslySetInnerHTML={{ __html: profile.bioHtml }}
					/>

					<div className="hero-contacts">
						{profile.contacts.map((c) => (
							<a
								key={c.url}
								className="hero-link"
								href={c.url}
								target="_blank"
								rel="noreferrer"
							>
								<ContactIcon label={c.label} width={16} height={16} />
								{c.label}
							</a>
						))}
					</div>
				</div>

				<div className="hero-side">
					<div className="hero-signal">
						<div className="hero-signal-title">{t.systemStatus}</div>
						<div className="hero-signal-board">
							<div className="hero-signal-row">
								<span className="hero-signal-key">{t.statusKey}</span>
								<span className="hero-signal-value">
									<span className="dot" aria-hidden="true" />
									{profile.signal.status}
								</span>
							</div>
							<div className="hero-signal-row">
								<span className="hero-signal-key">{t.tzKey}</span>
								<span className="hero-signal-value">{profile.signal.tz}</span>
							</div>
							<div className="hero-signal-row">
								<span className="hero-signal-key">{t.responseKey}</span>
								<span className="hero-signal-value">{profile.signal.response}</span>
							</div>
						</div>
					</div>
					<Terminal />
				</div>
			</div>
		</section>
	);
}
