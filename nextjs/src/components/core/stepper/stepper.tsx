import { Progress } from "@/components/core/stepper/parts/progress";
import { StepperHeader } from "@/components/core/stepper/parts/stepper-header";
import type { ReactNode } from "react";

export type StepperProps = {
  current: number;
  progress: number;
  children: ReactNode;
};

export const Stepper = ({ children, ...rest }: StepperProps) => {
  return (
    <div className="flex gap-4 items-center">
      <Progress {...rest} />
      <StepperHeader>{children}</StepperHeader>
    </div>
  );
};
