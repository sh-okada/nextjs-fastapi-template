import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { postDoc } from "@/app/(private)/(without-header)/doc/post/action";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Input } from "@/components/core/input";
import { postDocSchema } from "@/lib/zod/schema";

export const DocForm = () => {
  const [lastResult, action] = useActionState(postDoc, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: postDocSchema });
    },
    shouldValidate: "onBlur",
  });

  return (
    <form {...getFormProps(form)} action={action}>
      <Field>
        <Field.Label htmlFor={fields.title.id}>タイトル</Field.Label>
        <Input
          {...getInputProps(fields.title, { type: "text" })}
          key={fields.title.key}
        />
        <ErrorText>{fields.title.errors}</ErrorText>
      </Field>
    </form>
  );
};
