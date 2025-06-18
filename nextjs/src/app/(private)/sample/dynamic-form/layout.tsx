import { DynamicFormProvider } from "@/app/(private)/sample/dynamic-form/_components/dynamic-form-provider";
import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <DynamicFormProvider>{children}</DynamicFormProvider>;
}
