import type { ComponentPropsWithoutRef } from "react";
import { SITE } from "@/lib/site";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel"> & {
  children: React.ReactNode;
};

export function BookConsultationButton({ children, className, ...rest }: Props) {
  return (
    <a
      href={SITE.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
