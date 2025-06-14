import { Header } from "@/app/(private)/_components/header";
import { Container } from "@/components/ui-parts/container";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
