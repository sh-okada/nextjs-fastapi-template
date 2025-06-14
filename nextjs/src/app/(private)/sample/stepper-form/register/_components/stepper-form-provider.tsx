"use client";

import { postProfile } from "@/app/(private)/sample/stepper-form/register/action";
import { paths } from "@/config/paths";
import { profileSchemaWithIntent } from "@/lib/zod";
import { FormProvider, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useRouter } from "next/navigation";
import { type ReactNode, useActionState } from "react";

export type StepperFormProviderProps = {
  children: ReactNode;
};

export const StepperFormProvider = ({ children }: StepperFormProviderProps) => {
  const router = useRouter();
  const [lastResult] = useActionState(postProfile, null);
  const [form] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: profileSchemaWithIntent });
    },
    shouldValidate: "onBlur",
    onSubmit(event, { formData }) {
      event.preventDefault();
      if (formData.get("intent") === "confirm") {
        router.push(paths.sampleStepperForm.register.confirm.getHref());
      }
    },
  });

  return <FormProvider context={form.context}>{children}</FormProvider>;
};
