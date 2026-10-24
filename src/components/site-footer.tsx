import Link from "next/link";
import { profile } from "@/content/profile";

function siteHost() {
  return new URL(profile.siteUrl).host.replace(/^www\./, "");
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0 text-accent"
      fill="none"
      height="15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="15"
    >
      <rect height="16" rx="2" width="20" x="2" y="4" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0 text-accent"
      fill="currentColor"
      height="15"
      viewBox="0 0 24 24"
      width="15"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.44-8.44ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.9 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0 text-accent"
      fill="none"
      height="15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="15"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0 text-accent"
      fill="none"
      height="15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="15"
    >
      <path d="M12 15V3" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function SiteFooter() {
  const year = profile.updated.slice(0, 4);

  return (
    <footer className="w-full border-t border-line bg-background">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link className="inline-flex" href="/">
            <span className="flex items-center gap-2">
              <img
                alt=""
                className="opacity-80"
                height={20}
                src="/icon"
                width={20}
              />
              <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
                {siteHost()}
              </span>
            </span>
          </Link>
          <p className="text-center text-xs text-muted opacity-80 sm:text-left">
            Designed &amp; built by {profile.name} · {year}
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:items-end">
          <Link href="/contact">
            <span className="inline-flex h-7 items-center gap-1.5 rounded-[14px] border border-success/20 bg-accent/12 px-3 text-[12px] font-medium whitespace-nowrap text-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
              <span className="text-xs text-foreground/80">Available for work</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            <a
              aria-label={`Email ${profile.personalEmail}`}
              className="inline-flex h-8 items-center gap-1.5 text-[14px] font-medium text-muted hover:text-foreground"
              href={`mailto:${profile.personalEmail}`}
            >
              <MailIcon />
              {profile.personalEmail}
            </a>
            <a
              aria-label={`WhatsApp ${profile.phoneDisplay}`}
              className="inline-flex h-8 items-center gap-1.5 text-[14px] font-medium text-muted hover:text-foreground"
              href={profile.whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
              {profile.phoneDisplay}
            </a>
            <a
              aria-label={`Call ${profile.phoneDisplay}`}
              className="inline-flex h-8 items-center gap-1.5 text-[14px] font-medium text-muted hover:text-foreground"
              href={profile.phoneHref}
            >
              <PhoneIcon />
              {profile.phoneDisplay}
            </a>
            <a
              className="inline-flex h-8 items-center gap-1.5 text-[14px] font-medium text-muted hover:text-foreground"
              href="/resume.pdf"
            >
              <DownloadIcon />
              Download resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
