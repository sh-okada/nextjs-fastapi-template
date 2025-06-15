import { StepperFormProvider } from "@/app/(private)/sample/stepper-form/register/_components/stepper-form-provider";
import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <StepperFormProvider>{children}</StepperFormProvider>;
}
