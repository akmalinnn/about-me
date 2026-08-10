import type { ReactElement, SVGProps } from "react";

const base = {
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
	width: 18,
	height: 18,
};

type IconProps = SVGProps<SVGSVGElement>;

export function SunIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
	);
}

export function MoonIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	);
}

export function MenuIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	);
}

export function CloseIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M18 6 6 18M6 6l12 12" />
		</svg>
	);
}

export function ArrowUpIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M12 19V5M5 12l7-7 7 7" />
		</svg>
	);
}

export function DownloadIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<path d="M7 10l5 5 5-5M12 15V3" />
		</svg>
	);
}

export function MailIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-10 6L2 7" />
		</svg>
	);
}

export function LinkedinIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A6 6 0 0 1 16 8z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

export function GithubIcon(props: IconProps) {
	return (
		<svg {...base} {...props}>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}

const focusIcons: Record<string, (props: IconProps) => ReactElement> = {
	automation: (p) => (
		<svg {...base} {...p}>
			<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2.8 2.8 6-6a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.8-2.8 2.6-2.6z" />
		</svg>
	),
	container: (p) => (
		<svg {...base} {...p}>
			<rect x="3" y="8" width="18" height="12" rx="2" />
			<path d="M3 12h18M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
		</svg>
	),
	monitor: (p) => (
		<svg {...base} {...p}>
			<rect x="2" y="3" width="20" height="14" rx="2" />
			<path d="M8 21h8M12 17v4" />
			<path d="M4 7l4 4 3-3 3 3 4-4" />
		</svg>
	),
	cloud: (p) => (
		<svg {...base} {...p}>
			<path d="M17.5 19a4.5 4.5 0 1 0-.3-8.99A6 6 0 0 0 6.2 12.5 3.5 3.5 0 0 0 7 19h10.5z" />
		</svg>
	),
};

export function FocusIcon({ name, ...props }: { name?: string } & IconProps) {
	const Icon = (name && focusIcons[name]) || focusIcons.cloud;
	return <Icon {...props} />;
}

export function ContactIcon({ label, ...props }: { label?: string } & IconProps) {
	if (label === "linkedin.com/in/akmal-nafis/") return <LinkedinIcon {...props} />;
	if (label === "github.com/akmalinnn") return <GithubIcon {...props} />;
	return <MailIcon {...props} />;
}
