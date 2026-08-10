import { useLanguage } from "./language-context";
import type { Language } from "./content";

export interface TermStrings {
	help: string[];
	whoami: string;
	pwd: string;
	ls: string;
	skills: string[];
	contact: string[];
	unknown: string;
	denied: string;
}

export interface Strings {
	navHome: string;
	navPortfolio: string;
	navResume: string;
	downloadCv: string;
	systemStatus: string;
	statusKey: string;
	tzKey: string;
	responseKey: string;
	about: string;
	numbers: string;
	doing: string;
	experience: string;
	education: string;
	skills: string;
	portfolio: string;
	portfolioIntro: string;
	all: string;
	architecture: string;
	architectureSub: string;
	term: TermStrings;
	footerNote: string;
}

const en: Strings = {
	navHome: "Home",
	navPortfolio: "Portfolio",
	navResume: "Resume",
	downloadCv: "Download CV",
	systemStatus: "system status",
	statusKey: "status",
	tzKey: "tz",
	responseKey: "response",
	about: "About Me.",
	numbers: "By the Numbers",
	doing: "What I'm Doing",
	experience: "Experience",
	education: "Education",
	skills: "Skills & Tools",
	portfolio: "Portfolio",
	portfolioIntro:
		"Selected projects across infrastructure automation and CI/CD. Filter by category.",
	all: "All",
	architecture: "Terminal",
	architectureSub: "A sandbox with limited access.",
	term: {
		help: [
			"Available commands:",
			"  help      show this help",
			"  whoami    print current user",
			"  date      print system time",
			"  pwd       print working directory",
			"  ls        list files",
			"  skills    list skills",
			"  contact   show contact info",
			"  clear     clear the screen",
		],
		whoami: "guest",
		pwd: "~/akmal/portfolio",
		ls: "assets/  content/  dist/  public/  src/",
		skills: [
			"go  python  kotlin  php  javascript",
			"docker  terraform  jenkins  gitlab-ci  github-actions",
			"grafana  signoz  zabbix  prometheus",
			"aws  gcp  linux  nginx",
		],
		contact: [
			"email:    akmalin.reg@gmail.com",
			"linkedin: linkedin.com/in/akmal-nafis/",
			"github:   github.com/akmalinnn",
		],
		unknown: "bash: {cmd}: command not found",
		denied: "bash: {cmd}: permission denied",
	},
	footerNote: "Built with React + Vite + Cloudflare Pages. All systems operational.",
};

const id: Strings = {
	navHome: "Beranda",
	navPortfolio: "Portofolio",
	navResume: "Resume",
	downloadCv: "Unduh CV",
	systemStatus: "status sistem",
	statusKey: "status",
	tzKey: "tz",
	responseKey: "response",
	about: "Tentang Saya.",
	numbers: "Dalam Angka",
	doing: "Yang Saya Kerjakan",
	experience: "Pengalaman",
	education: "Pendidikan",
	skills: "Keahlian & Tools",
	portfolio: "Portofolio",
	portfolioIntro:
		"Proyek terpilih di bidang otomasi infrastruktur dan CI/CD. Filter berdasarkan kategori.",
	all: "Semua",
	architecture: "Terminal",
	architectureSub: "Sandbox dengan akses terbatas.",
	term: {
		help: [
			"Perintah yang tersedia:",
			"  help      tampilkan bantuan ini",
			"  whoami    tampilkan pengguna saat ini",
			"  date      tampilkan waktu sistem",
			"  pwd       tampilkan direktori kerja",
			"  ls        daftar berkas",
			"  skills    daftar keahlian",
			"  contact   tampilkan info kontak",
			"  clear     bersihkan layar",
		],
		whoami: "tamu",
		pwd: "~/akmal/portfolio",
		ls: "assets/  content/  dist/  public/  src/",
		skills: [
			"go  python  kotlin  php  javascript",
			"docker  terraform  jenkins  gitlab-ci  github-actions",
			"grafana  signoz  zabbix  prometheus",
			"aws  gcp  linux  nginx",
		],
		contact: [
			"email:    akmalin.reg@gmail.com",
			"linkedin: linkedin.com/in/akmal-nafis/",
			"github:   github.com/akmalinnn",
		],
		unknown: "bash: {cmd}: perintah tidak ditemukan",
		denied: "bash: {cmd}: izin ditolak",
	},
	footerNote: "Dibangun dengan React + Vite + Cloudflare Pages. Semua sistem beroperasi normal.",
};

const ja: Strings = {
	navHome: "ホーム",
	navPortfolio: "ポートフォリオ",
	navResume: "レジュメ",
	downloadCv: "CVをダウンロード",
	systemStatus: "システムステータス",
	statusKey: "ステータス",
	tzKey: "tz",
	responseKey: "レスポンス",
	about: "私について.",
	numbers: "数字で見る",
	doing: "私がやっていること",
	experience: "経験",
	education: "学歴",
	skills: "スキルとツール",
	portfolio: "ポートフォリオ",
	portfolioIntro:
		"インフラ自動化と CI/CD にわたる選りすぐりのプロジェクト。カテゴリで絞り込みできます。",
	all: "すべて",
	architecture: "ターミナル",
	architectureSub: "アクセス制限付きのサンドボックス。",
	term: {
		help: [
			"利用可能なコマンド:",
			"  help      ヘルプを表示",
			"  whoami    現在のユーザーを表示",
			"  date      システム時刻を表示",
			"  pwd       作業ディレクトリを表示",
			"  ls        ファイル一覧",
			"  skills    スキル一覧",
			"  contact   連絡先を表示",
			"  clear     画面をクリア",
		],
		whoami: "guest",
		pwd: "~/akmal/portfolio",
		ls: "assets/  content/  dist/  public/  src/",
		skills: [
			"go  python  kotlin  php  javascript",
			"docker  terraform  jenkins  gitlab-ci  github-actions",
			"grafana  signoz  zabbix  prometheus",
			"aws  gcp  linux  nginx",
		],
		contact: [
			"email:    akmalin.reg@gmail.com",
			"linkedin: linkedin.com/in/akmal-nafis/",
			"github:   github.com/akmalinnn",
		],
		unknown: "bash: {cmd}: コマンドが見つかりません",
		denied: "bash: {cmd}: 権限がありません",
	},
	footerNote: "React + Vite + Cloudflare Pages で構築。全システム正常稼働中。",
};

export const stringsByLang: Record<Language, Strings> = { en, id, ja };

export function useI18n(): Strings {
	const { lang } = useLanguage();
	return stringsByLang[lang];
}
