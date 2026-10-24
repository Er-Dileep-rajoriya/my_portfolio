import { Suspense } from "react";
import { AskMeButton, HeaderBar, SiteCursor, SiteHeaderBar } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <>
      <SiteCursor />
      <AskMeButton />
      <Suspense fallback={<HeaderBar />}>
        <SiteHeaderBar />
      </Suspense>
    </>
  );
}
