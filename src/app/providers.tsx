"use client";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect } from "react";

function scrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth" });
  return true;
}

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // On route navigation, restore hash scroll if present; otherwise scroll to top.
    if (window.location.hash) {
      const didScroll = scrollToHash(window.location.hash);
      if (!didScroll) {
        // Element may not be mounted yet; retry shortly.
        setTimeout(() => scrollToHash(window.location.hash), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash) scrollToHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        {children}
      </TooltipProvider>
    </ErrorBoundary>
  );
}


