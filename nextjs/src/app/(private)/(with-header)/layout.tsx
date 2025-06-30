import type { ReactNode } from "react";
import { Header } from "@/app/(private)/(with-header)/_components/header";
import { Container } from "@/components/ui-parts/container";

export default function PrivateLayoutWithHeader({
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
