"use client";

import { Button } from "@/components/core/button";
import { DatePicker } from "@/components/core/date-picker";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Fieldset } from "@/components/core/fieldset";
import { Radio } from "@/components/core/radio";
import { RadioGroup } from "@/components/core/radio-group";
import { Section } from "@/components/core/section/section";
import { Select, type SelectItems } from "@/components/core/select";
import {
  getFormProps,
  getInputProps,
  getSelectProps,
  useField,
  useFormMetadata,
} from "@conform-to/react";

export type SampleConfirmProps = {
  yearItems: SelectItems;
  departmentItems: SelectItems;
  gradeItems: SelectItems;
};

export const SampleConfirm = ({
  yearItems,
  departmentItems,
  gradeItems,
}: SampleConfirmProps) => {
  const form = useFormMetadata();
  const [joiningDate] = useField<Date>("joiningDate");
  const [years] = useField<string>("years");
  const [department] = useField<string>("department");
  const [grade] = useField<string>("grade");

  return (
    <form
      className="flex flex-col gap-4"
      {...getFormProps(form)}
      onSubmit={form.onSubmit}
    >
      <Section>
        <Section.Header>入力内容の確認</Section.Header>
        <Section.Content className="flex flex-col gap-4">
          <p>{joiningDate.value}</p>
          <p>{yearItems.find((item) => item.value === years.value)}</p>
        </Section.Content>
      </Section>
      <Button className="w-full" name="intent" value="confirm" type="submit">
        この内容で登録する
      </Button>
    </form>
  );
};
