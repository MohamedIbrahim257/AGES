"use client";

import { BookingConsultationProvider } from "@/context/booking-consultation-context";
import { ConsultationBookingModal } from "@/components/ConsultationBookingModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BookingConsultationProvider>
      {children}
      <ConsultationBookingModal />
    </BookingConsultationProvider>
  );
}
