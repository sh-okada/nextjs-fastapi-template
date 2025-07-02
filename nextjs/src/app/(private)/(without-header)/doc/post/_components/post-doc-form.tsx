"use client";

import {
  getFormProps,
  getInputProps,
  useForm,
  useInputControl,
} from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import { postDoc } from "@/app/(private)/(without-header)/doc/post/action";
import { Button } from "@/components/core/button";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Fieldset } from "@/components/core/fieldset";
import { Input } from "@/components/core/input";
import { Section } from "@/components/core/section/section";
import { Markdown } from "@/components/ui-parts/markdown/markdown";
import { MarkdownEditor } from "@/components/ui-parts/markdown-editor/markdown-editor";
import { postDocSchema } from "@/lib/zod/schema";

export const PostDocForm = () => {
  const [lastResult, action] = useActionState(postDoc, null);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: postDocSchema });
    },
    shouldValidate: "onBlur",
  });
  const doc = useInputControl(fields.doc);

  return (
    <form {...getFormProps(form)} action={action}>
      <div className="flex flex-col gap-8">
        <Section>
          <Section.Content className="flex flex-col gap-2">
            <Field>
              <Field.Label htmlFor={fields.title.id}>タイトル</Field.Label>
              <Input
                placeholder="例）イケてるコードとは？"
                {...getInputProps(fields.title, { type: "text" })}
                key={fields.title.key}
              />
              <ErrorText>{fields.title.errors}</ErrorText>
            </Field>
            <Fieldset>
              <Fieldset.Legend>内容</Fieldset.Legend>
              <MarkdownEditor doc={doc.value} onChange={doc.change} />
            </Fieldset>
          </Section.Content>
        </Section>
        <Section>
          <Section.Header>プレビュー</Section.Header>
          <Section.Content>
            <Markdown body={doc.value} />
          </Section.Content>
        </Section>
        <Button type="submit">投稿</Button>
      </div>
    </form>
  );
};
