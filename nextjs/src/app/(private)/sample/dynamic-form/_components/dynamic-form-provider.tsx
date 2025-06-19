"use client";

import { FormProvider, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useRouter } from "next/navigation";
import { type ReactNode, startTransition, useActionState } from "react";
import { submitPersonalInfo } from "@/app/(private)/sample/dynamic-form/action";
import { paths } from "@/config/paths";
import { personalInfoSchema } from "@/lib/zod/schema";

export type DynamicFormProviderProps = {
  children: ReactNode;
};

export const DynamicFormProvider = ({ children }: DynamicFormProviderProps) => {
  const router = useRouter();
  const [lastResult, action] = useActionState(submitPersonalInfo, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      if (formData.get("intent") === "search") {
        return parseWithZod(formData, {
          schema: personalInfoSchema.pick({ zipcode: true }),
        });
      }

      return parseWithZod(formData, {
        schema: personalInfoSchema,
      });
    },
    shouldValidate: "onBlur",
    defaultValue: {
      name: "",
      zipcode: "",
      address: "",
    },
    onSubmit(event, { formData }) {
      event.preventDefault();

      switch (formData.get("intent")) {
        case "search":
          router.push(
            paths.dynamicForm.getHref({ zipcode: fields.zipcode.value }),
          );
          break;
        default:
          startTransition(() => {
            action(formData);
          });
      }
    },
  });

  return <FormProvider context={form.context}>{children}</FormProvider>;
};
