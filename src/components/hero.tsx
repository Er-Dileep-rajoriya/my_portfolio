import Link from "next/link";
import { HeroCanvas, RoleLine, ScrollCue } from "@/components/hero-motion";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden">
      <div className="hero-gradient-bg absolute inset-0" />
      <div className="absolute inset-0 bg-background/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-32 bg-linear-to-b from-transparent via-background/72 to-background md:h-44" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1280px] flex-col px-6 md:px-12 lg:grid lg:grid-cols-12 lg:gap-4">
        <div className="relative order-1 hidden h-[40vh] min-h-48 overflow-hidden md:block lg:order-2 lg:col-span-7 lg:h-[50vh] lg:max-h-[620px]">
          <div className="absolute inset-2">
            <HeroCanvas />
          </div>
        </div>
        <div className="order-2 flex flex-col justify-center py-8 md:py-0 lg:order-1 lg:col-span-5 lg:min-h-[calc(100svh-4rem)]">
          <div className="flex flex-col gap-6">
            <div className="rise">
              <span className="inline-flex h-7 items-center gap-1.5 rounded-[14px] border border-success/20 bg-accent/10 px-3 text-[12px] font-medium whitespace-nowrap text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                <span className="text-[12px] tracking-wider text-muted uppercase">{hero.badge}</span>
              </span>
            </div>
            <h1 className="font-display text-[clamp(28px,5vw,64px)] leading-[1.1] font-extrabold tracking-tight">
              <span className="block">
                {hero.words.map((word, index) => (
                  <span
                    className="hero-word mr-[0.25em] inline-block bg-linear-to-r from-foreground to-muted bg-clip-text text-transparent will-change-transform"
                    key={word}
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>
            <p className="rise rise-3 max-w-xl text-xl leading-relaxed text-muted">{hero.lede}</p>
            <RoleLine roles={hero.roles} />
            <div className="flex flex-col items-start gap-3">
              <div className="rise rise-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Link
                  className="hero-primary inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-[15px] font-semibold text-on-accent sm:w-auto"
                  href="/projects"
                >
                  View My Work
                  <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </Link>
                <Link
                  className="hero-secondary inline-flex h-12 w-full items-center justify-center rounded-xl border border-line bg-transparent px-6 text-[15px] font-semibold text-foreground sm:w-auto"
                  href="/contact"
                >
                  Get In Touch
                </Link>
              </div>
              <a
                className="inline-flex h-8 items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground"
                download
                href="/resume.pdf"
              >
                <svg aria-hidden="true" className="text-accent" fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollCue />
    </section>
  );
}
