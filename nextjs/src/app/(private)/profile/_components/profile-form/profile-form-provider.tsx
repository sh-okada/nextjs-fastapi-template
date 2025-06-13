import { postProfile } from "@/app/(private)/profile/action";
import { profileSchema } from "@/lib/zod";
import { FormProvider, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

export type ProfileFormProviderProps = {
  children: React.ReactNode;
};

export const ProfileFormProvider = ({ children }: ProfileFormProviderProps) => {
  const [lastResult, action] = useActionState(postProfile, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: profileSchema });
    },
    shouldValidate: "onBlur",
  });

  return <FormProvider context={form.context}>{children}</FormProvider>;
};
