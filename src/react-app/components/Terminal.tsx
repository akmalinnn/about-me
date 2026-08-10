import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n";

type LineKind = "cmd" | "out" | "ok" | "err";

interface TermLine {
	kind: LineKind;
	text: string;
}

const RESTRICTED = new Set([
	"sudo",
	"su",
	"exit",
	"ssh",
	"rm",
	"chmod",
	"chown",
	"passwd",
	"mkdir",
	"shutdown",
	"reboot",
	"wget",
	"curl",
	"cat",
	"edit",
	"vi",
	"vim",
	"nano",
]);

export function Terminal() {
	const t = useI18n();
	const [input, setInput] = useState("");
	const [log, setLog] = useState<TermLine[]>([]);
	const bodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (bodyRef.current) {
			bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
		}
	}, [log]);

	const run = (raw: string): { clear: boolean; lines: TermLine[] } => {
		const cmd = raw.trim();
		if (!cmd) return { clear: false, lines: [] };
		const base = cmd.split(/\s+/)[0].toLowerCase();

		if (RESTRICTED.has(base)) {
			return { clear: false, lines: [{ kind: "err", text: t.term.denied.replace("{cmd}", base) }] };
		}

		switch (base) {
			case "help":
				return { clear: false, lines: t.term.help.map((line) => ({ kind: "ok", text: line })) };
			case "whoami":
				return { clear: false, lines: [{ kind: "out", text: t.term.whoami }] };
			case "date":
				return { clear: false, lines: [{ kind: "out", text: new Date().toString() }] };
			case "pwd":
				return { clear: false, lines: [{ kind: "out", text: t.term.pwd }] };
			case "ls":
				return { clear: false, lines: [{ kind: "out", text: t.term.ls }] };
			case "skills":
				return { clear: false, lines: t.term.skills.map((line) => ({ kind: "ok", text: line })) };
			case "contact":
				return { clear: false, lines: t.term.contact.map((line) => ({ kind: "ok", text: line })) };
			case "clear":
				return { clear: true, lines: [] };
			default:
				return {
					clear: false,
					lines: [{ kind: "err", text: t.term.unknown.replace("{cmd}", base) }],
				};
		}
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const { clear, lines } = run(input);
		if (clear) {
			setLog([]);
		} else {
			setLog((prev) => [...prev, { kind: "cmd", text: input }, ...lines]);
		}
		setInput("");
	};

	return (
		<div className="terminal" aria-label="Interactive terminal">
			<div className="terminal-bar">
				<span className="terminal-dot dot-red" />
				<span className="terminal-dot dot-amber" />
				<span className="terminal-dot dot-green" />
				<span className="terminal-title">guest@akmal-portfolio: ~</span>
			</div>
			<div className="terminal-body" ref={bodyRef}>
				{log.map((line, i) => (
					<div key={i} className={`terminal-line terminal-line--${line.kind}`}>
						{line.kind === "cmd" && <span className="terminal-prompt">$&nbsp;</span>}
						<span className="terminal-text">{line.text}</span>
					</div>
				))}
				<form className="terminal-line terminal-line--input" onSubmit={onSubmit}>
					<span className="terminal-prompt">$&nbsp;</span>
					<input
						className="terminal-field"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						autoComplete="off"
						autoCapitalize="off"
						spellCheck={false}
						aria-label="Terminal input"
					/>
				</form>
			</div>
		</div>
	);
}
