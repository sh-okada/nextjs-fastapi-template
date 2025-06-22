"use client";

import { FormProvider, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useRouter } from "next/navigation";
import { type ReactNode, startTransition, useActionState } from "react";
import { postProfile } from "@/app/(private)/sample/stepper-form/register/action";
import { paths } from "@/config/paths";
import { profileSchema } from "@/lib/zod/schema";

export type StepperFormProviderProps = {
	children: ReactNode;
};

export const StepperFormProvider = ({ children }: StepperFormProviderProps) => {
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

			switch (formData.get("intent")) {
				case "confirm":
					router.push(paths.stepperFormConfirm.getHref());
					break;
				case "submit":
					startTransition(async () => {
						action(formData);
					});
					break;
			}
		},
	});

	return <FormProvider context={form.context}>{children}</FormProvider>;
};
