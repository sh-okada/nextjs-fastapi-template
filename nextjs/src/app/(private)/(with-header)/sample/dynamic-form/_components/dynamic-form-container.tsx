import { searchAddress } from "@/api/search/search";
import { DynamicForm } from "@/app/(private)/(with-header)/sample/dynamic-form/_components/dynamic-form";

export type DynamicFormContainerProps = {
  zipcode?: string;
};

export const DynamicFormContainer = async ({
  zipcode,
}: DynamicFormContainerProps) => {
  const results = zipcode
    ? await searchAddress({ zipcode: zipcode })
    : undefined;

  return <DynamicForm searchedAddress={results && { ...results[0] }} />;
};
