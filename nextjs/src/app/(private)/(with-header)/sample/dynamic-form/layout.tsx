import type { ReactNode } from "react";
import { DynamicFormProvider } from "@/app/(private)/(with-header)/sample/dynamic-form/_components/dynamic-form-provider";

export default function DynamicFormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DynamicFormProvider>{children}</DynamicFormProvider>;
}
