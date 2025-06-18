import { Header } from "@/app/(private)/_components/header";
import { Container } from "@/components/ui-parts/container";
import type { ReactNode } from "react";

export default function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
