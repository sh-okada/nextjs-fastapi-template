"use client";

import { Button } from "@/components/core/button";
import { DatePicker } from "@/components/core/date-picker";
import { Input } from "@/components/core/input";
import { Section } from "@/components/core/section/section";
import type { SelectItems } from "@/components/core/select";
import { Stepper } from "@/components/core/stepper/stepper";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";
import { getFormProps, useField, useFormMetadata } from "@conform-to/react";

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
          <table className="w-full">
            <colgroup className="border-r border-black bg-gray-100" />
            <colgroup>
              <col className="border-r border-gray-100" />
            </colgroup>
            <tbody>
              <tr>
                <th className="px-4 py-5 text-start align-top" scope="row">
                  入社年月日
                </th>
                <td className="px-4 py-5 align-top">{selectJoiningDate}</td>
              </tr>
              <tr>
                <th className="px-4 py-5 text-start align-top" scope="row">
                  入社年数
                </th>
                <td className="px-4 py-5 align-top">{selectedYear}</td>
              </tr>
              <tr>
                <th className="px-4 py-5 text-start align-top" scope="row">
                  部署
                </th>
                <td className="px-4 py-5 align-top">{selectedDepartment}</td>
              </tr>
              <tr>
                <th className="px-4 py-5 text-start align-top" scope="row">
                  グレード
                </th>
                <td className="px-4 py-5 align-top">{selectedGrade}</td>
              </tr>
            </tbody>
          </table>
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
