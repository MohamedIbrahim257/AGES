"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
};

export function PageMotion({ children }: Props) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = mainRef.current;
      if (!root) return;

      const sections = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll('[data-animate="section"]'),
      );

      if (sections.length === 0) return;

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      const ctx = gsap.context(() => {
        if (prefersReducedMotion()) {
          gsap.set(sections, { autoAlpha: 1, y: 0 });
          return;
        }

        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { autoAlpha: 0, y: 44 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.92,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 92%",
                end: "bottom top",
                // onEnter only — no restart when scrolling back up (onEnterBack)
                toggleActions: "restart none none none",
                invalidateOnRefresh: true,
              },
            },
          );
        });
      }, root);

      window.addEventListener("load", refresh);
      window.addEventListener("resize", refresh);
      window.addEventListener("orientationchange", refresh);

      void document.fonts.ready.then(refresh);

      const timeouts = [50, 200, 550, 1100].map((ms) =>
        window.setTimeout(refresh, ms),
      );

      root.querySelectorAll("img").forEach((img) => {
        if (img.complete) return;
        const onDone = () => refresh();
        img.addEventListener("load", onDone, { once: true });
        img.addEventListener("error", onDone, { once: true });
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(refresh);
      });

      return () => {
        window.removeEventListener("load", refresh);
        window.removeEventListener("resize", refresh);
        window.removeEventListener("orientationchange", refresh);
        timeouts.forEach((id) => clearTimeout(id));
        ctx.revert();
      };
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} className="flex flex-col">
      {children}
    </main>
  );
}
