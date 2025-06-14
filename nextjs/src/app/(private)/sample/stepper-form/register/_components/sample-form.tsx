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

export type SampleFormProps = {
  yearItems: SelectItems;
  departmentItems: SelectItems;
  gradeItems: SelectItems;
};

export const SampleForm = ({
  yearItems,
  departmentItems,
  gradeItems,
}: SampleFormProps) => {
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
        <Section.Header>プロフィールを入力</Section.Header>
        <Section.Content className="flex flex-col gap-4">
          <Fieldset>
            <Fieldset.Legend>入社日を選択</Fieldset.Legend>
            <DatePicker
              {...getInputProps(joiningDate, { type: "date" })}
              key={joiningDate.key}
            />
            <ErrorText>{joiningDate.errors}</ErrorText>
          </Fieldset>
          <Field>
            <Field.Label htmlFor={years.id}>入社年数を選択</Field.Label>
            <Select {...getSelectProps(years)}>
              <Select.Item value="" hidden>
                選択してください
              </Select.Item>
              {yearItems.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select>
            <ErrorText>{years.errors}</ErrorText>
          </Field>
          <Field>
            <Field.Label htmlFor={department.id}>部署を選択</Field.Label>
            <Select {...getSelectProps(department)}>
              <Select.Item value="" hidden>
                選択してください
              </Select.Item>
              {departmentItems.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select>
            <ErrorText>{department.errors}</ErrorText>
          </Field>
          <Fieldset>
            <Fieldset.Legend>グレードを選択</Fieldset.Legend>
            <RadioGroup className="flex-col md:flex-row flex-wrap gap-2">
              {gradeItems.map((item) => (
                <Radio
                  key={item.value}
                  name={grade.name}
                  value={item.value}
                  defaultChecked={grade.initialValue === item.value}
                >
                  {item.label}
                </Radio>
              ))}
            </RadioGroup>
            <ErrorText>{grade.errors}</ErrorText>
          </Fieldset>
        </Section.Content>
      </Section>
      <Button className="w-full" name="intent" value="confirm" type="submit">
        入力内容を確認する
      </Button>
    </form>
  );
};
