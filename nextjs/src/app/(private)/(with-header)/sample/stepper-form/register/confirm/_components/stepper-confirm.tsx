"use client";

import { Button } from "@/components/core/button";
import { DatePicker } from "@/components/core/date-picker";
import { ErrorText } from "@/components/core/error-text";
import { Input } from "@/components/core/input";
import { Section } from "@/components/core/section/section";
import type { SelectItems } from "@/components/core/select";
import { Stepper } from "@/components/core/stepper/stepper";
import { Tr } from "@/components/core/table/parts/tr";
import { Table } from "@/components/core/table/table";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";
import { getFormProps, useField, useFormMetadata } from "@conform-to/react";

export type StepperConfirmProps = {
  yearItems: SelectItems<number>;
  departmentItems: SelectItems<string>;
  gradeItems: SelectItems<string>;
};

export const StepperConfirm = ({
  yearItems,
  departmentItems,
  gradeItems,
}: StepperConfirmProps) => {
  const form = useFormMetadata();
  const [joiningDate] = useField<Date>("joiningDate");
  const [years] = useField<number>("years");
  const [department_id] = useField<string>("department_id");
  const [grade_id] = useField<string>("grade_id");

  const selectJoiningDate = joiningDate.value;
  const selectedYear = yearItems.find(
    (item) => item.value === Number(years.value),
  )?.label;
  const selectedDepartment = departmentItems.find(
    (item) => item.value === department_id.value,
  )?.label;
  const selectedGrade = gradeItems.find(
    (item) => item.value === grade_id.value,
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
          <ErrorText>{form.errors}</ErrorText>
          <Table className="w-full">
            <Table.Colgroup>
              <Table.Col.HorizontalTh />
              <Table.Col.HorizontalTd />
            </Table.Colgroup>
            <Table.Tbody>
              <Table.Tr.Horizontal>
                <Table.Th.Horizontal>入社年月日</Table.Th.Horizontal>
                <Table.Td>{selectJoiningDate}</Table.Td>
              </Table.Tr.Horizontal>
              <Table.Tr.Horizontal>
                <Table.Th.Horizontal>入社年数</Table.Th.Horizontal>
                <Table.Td>{selectedYear}</Table.Td>
              </Table.Tr.Horizontal>
              <Table.Tr.Horizontal>
                <Table.Th.Horizontal>部署</Table.Th.Horizontal>
                <Table.Td>{selectedDepartment}</Table.Td>
              </Table.Tr.Horizontal>
              <Table.Tr.Horizontal>
                <Table.Th.Horizontal>グレード</Table.Th.Horizontal>
                <Table.Td>{selectedGrade}</Table.Td>
              </Table.Tr.Horizontal>
            </Table.Tbody>
          </Table>
        </Section.Content>
      </Section>
      <Button className="w-full" type="submit" name="intent" value="submit">
        この内容で登録する
      </Button>
      <Button className="text-center" variant="outline" asChild>
        <InternalLink href={paths.stepperFormRegister.getHref()}>
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
      <Input
        name={department_id.name}
        value={department_id.value}
        readOnly
        hidden
      />
      <Input name={grade_id.name} value={grade_id.value} readOnly hidden />
    </form>
  );
};
