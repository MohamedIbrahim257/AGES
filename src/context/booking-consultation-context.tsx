"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type BookingConsultationContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const BookingConsultationContext = createContext<BookingConsultationContextValue | null>(null);

export function BookingConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <BookingConsultationContext.Provider value={value}>{children}</BookingConsultationContext.Provider>
  );
}

export function useBookingConsultation() {
  const ctx = useContext(BookingConsultationContext);
  if (!ctx) {
    throw new Error("useBookingConsultation must be used within BookingConsultationProvider");
  }
  return ctx;
}
