"use client";

import { postProfile } from "@/app/(private)/sample/stepper-form/action";
import { profileSchemaWithIntent } from "@/lib/zod";
import { FormProvider, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type ReactNode, useActionState } from "react";

export type StepperFormProviderProps = {
  children: ReactNode;
};

export const StepperFormProvider = ({ children }: StepperFormProviderProps) => {
  const [lastResult] = useActionState(postProfile, null);
  const [form] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: profileSchemaWithIntent });
    },
    shouldValidate: "onBlur",
  });

  return <FormProvider context={form.context}>{children}</FormProvider>;
};
