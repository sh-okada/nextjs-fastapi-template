"use client";

import { Button } from "@/components/core/button";
import { DatePicker } from "@/components/core/date-picker";
import { Input } from "@/components/core/input";
import { Section } from "@/components/core/section/section";
import type { SelectItems } from "@/components/core/select";
import { Stepper } from "@/components/core/stepper/stepper";
import { Table } from "@/components/core/table/table";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";
import { getFormProps, useField, useFormMetadata } from "@conform-to/react";

export type StepperConfirmProps = {
  yearItems: SelectItems;
  departmentItems: SelectItems;
  gradeItems: SelectItems;
};

export const StepperConfirm = ({
  yearItems,
  departmentItems,
  gradeItems,
}: StepperConfirmProps) => {
  const form = useFormMetadata();
  const [joiningDate] = useField<Date>("joiningDate");
  const [years] = useField<string>("years");
  const [department] = useField<string>("department");
  const [grade] = useField<string>("grade");

  const selectJoiningDate = joiningDate.value;
  const selectedYear = yearItems.find(
    (item) => item.value === years.value,
  )?.label;
  const selectedDepartment = departmentItems.find(
    (item) => item.value === department.value,
  )?.label;
  const selectedGrade = gradeItems.find(
    (item) => item.value === grade.value,
  )?.label;

  return (
    <form
      className="flex flex-col gap-8"
      {...getFormProps(form)}
      onSubmit={form.onSubmit}
    >
      <Stepper>
        <Stepper.Progress current={2} progress={3} />
        <Stepper.Header>入力内容の確認</Stepper.Header>
      </Stepper>
      <Section>
        <Section.Header>プロフィール</Section.Header>
        <Section.Content className="flex flex-col gap-4">
          <Table className="w-full">
            <colgroup>
              <Table.Col.HorizontalTh />
              <Table.Col.HorizontalTd />
            </colgroup>
            <tbody>
              <tr>
                <Table.Th.Horizontal>入社年月日</Table.Th.Horizontal>
                <Table.Td.Horizontal>{selectJoiningDate}</Table.Td.Horizontal>
              </tr>
              <tr>
                <Table.Th.Horizontal>入社年数</Table.Th.Horizontal>
                <Table.Td.Horizontal>{selectedYear}</Table.Td.Horizontal>
              </tr>
              <tr>
                <Table.Th.Horizontal>部署</Table.Th.Horizontal>
                <Table.Td.Horizontal>{selectedDepartment}</Table.Td.Horizontal>
              </tr>
              <tr>
                <Table.Th.Horizontal>グレード</Table.Th.Horizontal>
                <Table.Td.Horizontal>{selectedGrade}</Table.Td.Horizontal>
              </tr>
            </tbody>
          </Table>
        </Section.Content>
      </Section>
      <Button className="w-full" type="submit" name="intent" value="submit">
        この内容で登録する
      </Button>
      <Button className="text-center" variant="outline" asChild>
        <InternalLink href={paths.sampleStepperForm.register.getHref()}>
          入力内容を修正する
        </InternalLink>
      </Button>
      <DatePicker
        name={joiningDate.name}
        value={joiningDate.value}
        readOnly
        hidden
      />
      <Input name={years.name} value={years.value} readOnly hidden />
      <Input name={department.name} value={department.value} readOnly hidden />
      <Input name={grade.name} value={grade.value} readOnly hidden />
    </form>
  );
};
