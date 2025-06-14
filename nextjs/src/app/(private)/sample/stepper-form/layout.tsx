import { StepperFormProvider } from "@/app/(private)/sample/stepper-form/_components/stepper-form-provider";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StepperFormProvider>{children}</StepperFormProvider>;
}
