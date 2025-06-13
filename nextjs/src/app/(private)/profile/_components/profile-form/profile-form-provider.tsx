"use client";

import { postProfile } from "@/app/(private)/profile/action";
import { paths } from "@/config/paths";
import { profileSchema } from "@/lib/zod";
import { FormProvider, getFormProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useRouter } from "next/navigation";
import { startTransition, useActionState } from "react";

export type ProfileFormProviderProps = {
  children: React.ReactNode;
};

export const ProfileFormProvider = ({ children }: ProfileFormProviderProps) => {
  const router = useRouter();
  const [lastResult, action] = useActionState(postProfile, null);
  const [form] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: profileSchema });
    },
    shouldValidate: "onBlur",
    onSubmit(event, { formData }) {
      event.preventDefault();

      if (formData.get("intent") === "confirm") {
        router.push(paths.confirmProfile.getHref());
      } else {
        startTransition(() => {
          action(formData);
        });
      }
    },
  });

  return <FormProvider context={form.context}>{children}</FormProvider>;
};
