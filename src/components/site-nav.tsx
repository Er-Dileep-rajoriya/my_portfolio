"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { headerNavigation } from "@/content/navigation";
import { profile, socialLinks } from "@/content/profile";

function isCurrent(pathname: string, href: string, hash: string) {
  const [path, fragment] = href.split("#");
  if (fragment) return pathname === path && hash === `#${fragment}`;
  if (pathname !== path && !(path !== "/" && pathname.startsWith(`${path}/`))) return false;
  const sectionActive = headerNavigation.some((item) => {
    const [itemPath, itemHash] = item.href.split("#");
    return Boolean(itemHash) && itemPath === pathname && hash === `#${itemHash}`;
  });
  if (sectionActive) return false;
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  window.addEventListener("popstate", onStoreChange);
  const { pushState, replaceState } = history;
  history.pushState = function pushStateWithHash(...args) {
    pushState.apply(this, args);
    onStoreChange();
  };
  history.replaceState = function replaceStateWithHash(...args) {
    replaceState.apply(this, args);
    onStoreChange();
  };
  return () => {
    window.removeEventListener("hashchange", onStoreChange);
    window.removeEventListener("popstate", onStoreChange);
    history.pushState = pushState;
    history.replaceState = replaceState;
  };
}

function useHash() {
  return useSyncExternalStore(subscribeHash, () => window.location.hash, () => "");
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" width="16">
      <path d="M7 17.5 4 20V6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v9a1.5 1.5 0 0 1-1.5 1.5H7Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" width="16">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" width="16">
      <path d="M16 3.5A8 8 0 1 0 20.5 14 6.5 6.5 0 0 1 16 3.5Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" width="16">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ) : (
    <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" width="16">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function AskAiLink({ className = "" }: { className?: string }) {
  return (
    <Link
      className={`inline-flex h-9 items-center gap-2 rounded-xl bg-header-accent px-4 text-[13px] font-semibold text-on-header-accent ${className}`}
      href="/contact"
    >
      Ask AI
      <ChatIcon />
    </Link>
  );
}

function SparklesIcon() {
  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      fill="none"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </svg>
  );
}

export function AskMeButton() {
  const [open, setOpen] = useState(false);

  return (
    <Link
      aria-label="Ask me anything"
      className={`fixed bottom-32 right-6 z-40 flex h-12 items-center rounded-full bg-accent text-on-accent shadow-lg shadow-accent/30 transition-all duration-300 ease-out select-none hover:scale-105 hover:shadow-xl hover:shadow-accent/40 motion-reduce:transition-none motion-reduce:hover:scale-100 ${open ? "w-40 pr-5 pl-4" : "w-12 px-3.5"}`}
      href="/contact"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onTouchStart={() => setOpen(true)}
    >
      <SparklesIcon />
      <span
        className={`overflow-hidden text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out motion-reduce:transition-none ${open ? "visible w-28 pl-2 opacity-100" : "invisible w-0 pl-0 opacity-0"}`}
      >
        Ask me anything
      </span>
    </Link>
  );
}

function SocialRow() {
  const links = socialLinks();
  if (links.length === 0) return null;

  return (
    <ul className="absolute bottom-12 flex items-center justify-center gap-5">
      {links.map((link) => (
        <li key={link.href}>
          <a
            aria-label={link.label}
            className="header-icon inline-flex h-10 w-10 items-center justify-center rounded-[10px]"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label === "GitHub" ? <GitHubIcon /> : <LinkedInIcon />}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function HeaderBar({ hash = "", pathname = "/" }: { hash?: string; pathname?: string }) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [light, setLight] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const open = openPath === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function toggleMenu() {
    setOpenPath(open ? null : pathname);
  }

  function toggleTheme() {
    const next = !light;
    document.documentElement.dataset.theme = next ? "light" : "dark";
    setLight(next);
  }

  const themeLabel = light ? "Switch to dark mode" : "Switch to light mode";

  return (
    <header className="site-header fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6">
        <Link className="logo flex min-h-11 min-w-0 items-center gap-2.5" href="/">
          <img
            alt=""
            className="h-10 w-10 shrink-0 rounded-full border border-header-line object-cover object-[center_18%]"
            height={40}
            src="/assets/dileep-rajoriya.jpg"
            width={40}
          />
          <span className="flex min-w-0 flex-col justify-center">
            <span className="truncate text-sm font-medium leading-none">{profile.name}</span>
            <span className="logo-role mt-1 truncate text-xs leading-none">{profile.role}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {headerNavigation.map((item) => {
              const current = isCurrent(pathname, item.href, hash);
              return (
                <li key={item.href}>
                  <Link
                    aria-current={current ? "page" : undefined}
                    className="nav-link text-sm font-medium"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label={themeLabel}
            className="header-icon inline-flex h-9 w-9 items-center justify-center rounded-xl"
            onClick={toggleTheme}
            type="button"
          >
            {light ? <MoonIcon /> : <SunIcon />}
          </button>
          <AskAiLink />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label={themeLabel}
            className="header-icon inline-flex h-9 w-9 items-center justify-center rounded-xl"
            onClick={toggleTheme}
            type="button"
          >
            {light ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            aria-controls={menuId}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="header-icon inline-flex h-9 w-9 items-center justify-center rounded-xl"
            onClick={toggleMenu}
            type="button"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          aria-label="Menu"
          aria-modal="true"
          className="site-menu fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden"
          id={menuId}
          role="dialog"
        >
          <button
            aria-label="Close menu"
            className="header-icon absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-xl"
            onClick={() => setOpenPath(null)}
            ref={closeRef}
            type="button"
          >
            <MenuIcon open />
          </button>
          <nav aria-label="Mobile" className="flex w-full flex-col items-center gap-2 px-8">
            <ul className="w-full">
              {headerNavigation.map((item) => {
                const current = isCurrent(pathname, item.href, hash);
                return (
                  <li key={item.href}>
                    <Link
                      aria-current={current ? "page" : undefined}
                      className="menu-link block w-full rounded-xl py-4 text-center font-serif text-2xl font-semibold"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <AskAiLink className="mt-8" />
          <SocialRow />
        </div>
      ) : null}
    </header>
  );
}

const interactive = "a, button, summary, label, [role='button'], [role='link']";

export function SiteCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    if (!fine || reduce || !dotEl || !ringEl) return;
    const dotNode: HTMLDivElement = dotEl;
    const ringNode: HTMLDivElement = ringEl;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;
    let running = false;

    function place(element: HTMLDivElement, nextX: number, nextY: number) {
      element.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
    }

    function tick() {
      ringX += (x - ringX) * 0.2;
      ringY += (y - ringY) * 0.2;
      place(ringNode, ringX, ringY);
      if (Math.abs(x - ringX) < 0.5 && Math.abs(y - ringY) < 0.5) {
        running = false;
        return;
      }
      frame = window.requestAnimationFrame(tick);
    }

    function follow() {
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    }

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      place(dotNode, x, y);
      dotNode.style.opacity = "1";
      ringNode.style.opacity = "1";
      follow();
    }

    function onOver(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("input, textarea, select")) {
        dotNode.style.opacity = "0";
        ringNode.style.opacity = "0";
        ringNode.dataset.hover = "false";
        return;
      }
      ringNode.dataset.hover = target.closest(interactive) ? "true" : "false";
    }

    function onLeave() {
      dotNode.style.opacity = "0";
      ringNode.style.opacity = "0";
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    root.addEventListener("pointerleave", onLeave);

    return () => {
      root.classList.remove("custom-cursor");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="cursor-ring" ref={ringRef} />
      <div aria-hidden="true" className="cursor-dot" ref={dotRef} />
    </>
  );
}

export function SiteHeaderBar() {
  const pathname = usePathname();
  const hash = useHash();
  return <HeaderBar hash={hash} pathname={pathname} />;
}
