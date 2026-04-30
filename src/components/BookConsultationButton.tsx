"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useBookingConsultation } from "@/context/booking-consultation-context";

type Props = Omit<ComponentPropsWithoutRef<"button">, "type" | "onClick"> & {
  children: React.ReactNode;
};

export function BookConsultationButton({ children, className, ...rest }: Props) {
  const { open } = useBookingConsultation();

  return (
    <button type="button" className={className} onClick={open} {...rest}>
      {children}
    </button>
  );
}
