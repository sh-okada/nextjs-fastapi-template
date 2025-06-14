import { StepperFormProvider } from "@/app/(private)/sample/stepper-form/register/_components/stepper-form-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StepperFormProvider>{children}</StepperFormProvider>;
}
