"use client";

import { postAddress } from "@/app/(private)/sample/dynamic-form/action";
import { Button } from "@/components/core/button";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Input } from "@/components/core/input";
import { Section } from "@/components/core/section/section";
import { paths } from "@/config/paths";
import { addressSchema } from "@/lib/zod";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useRouter } from "next/navigation";
import { useActionState } from "react";

export type DynamicFormProps = {
  address?: string;
};

export const DynamicForm = ({ address }: DynamicFormProps) => {
  const router = useRouter();
  const [lastResult, action] = useActionState(postAddress, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      if (formData.get("intent") === "search") {
        return parseWithZod(formData, {
          schema: addressSchema.pick({ zipcode: true }),
        });
      }

      return parseWithZod(formData, {
        schema: addressSchema,
      });
    },
    shouldValidate: "onBlur",
    defaultValue: {
      zipcode: "",
      address: address || "",
    },
    onSubmit(event, { formData }) {
      event.preventDefault();
      if (formData.get("intent") === "search") {
        router.push(
          `${paths.sampleDynamicForm.getHref()}?postalCode=${encodeURIComponent(String(fields.zipcode.value ?? ""))}`,
        );
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-4"
      {...getFormProps(form)}
      action={action}
    >
      <Section>
        <Section.Header>住所を入力</Section.Header>
        <Section.Content className="flex flex-col gap-4">
          <Field>
            <Field.Label htmlFor={fields.zipcode.id}>郵便番号</Field.Label>
            <div className="flex gap-4">
              <Input
                className="w-30"
                placeholder="1234567"
                {...getInputProps(fields.zipcode, { type: "text" })}
                key={fields.zipcode.key}
              />
              <Button type="submit" name="intent" value="search">
                検索
              </Button>
            </div>
            <ErrorText>{fields.zipcode.errors}</ErrorText>
          </Field>
          <Field>
            <Field.Label htmlFor={fields.address.id}>住所</Field.Label>
            <Input
              {...getInputProps(fields.address, { type: "text" })}
              key={fields.address.key}
              disabled
            />
            <ErrorText>{fields.address.errors}</ErrorText>
          </Field>
        </Section.Content>
      </Section>
      <Button className="w-full" type="submit">
        登録
      </Button>
    </form>
  );
};
