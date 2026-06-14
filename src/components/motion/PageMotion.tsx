import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageMotion({ children }: Props) {
  return <main className="flex flex-col">{children}</main>;
}
