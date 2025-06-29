import { DynamicFormProvider } from "@/app/(private)/sample/dynamic-form/_components/dynamic-form-provider";
import type { ReactNode } from "react";

export default function DynamicFormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DynamicFormProvider>{children}</DynamicFormProvider>;
}
