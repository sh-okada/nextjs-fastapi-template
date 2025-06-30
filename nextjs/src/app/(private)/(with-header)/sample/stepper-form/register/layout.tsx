import type { ReactNode } from "react";
import { StepperFormProvider } from "@/app/(private)/(with-header)/sample/stepper-form/register/_components/stepper-form-provider";

export default function StepperFormLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <StepperFormProvider>{children}</StepperFormProvider>;
}
