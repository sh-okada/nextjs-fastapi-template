import { Container } from "@/components/ui-parts/container";
import type { ReactNode } from "react";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Container>{children}</Container>;
}
