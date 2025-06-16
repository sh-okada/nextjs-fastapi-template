import { searchAddress } from "@/api/search/search";
import { DynamicForm } from "@/app/(private)/sample/dynamic-form/_components/dynamic-form";

export type DynamicFormContainerProps = {
  zipcode?: string;
};

export const DynamicFormContainer = async ({
  zipcode,
}: DynamicFormContainerProps) => {
  const res = await searchAddress({ zipcode: "7310123" });
  const address =
    res.data.results.length > 0 ? res.data.results[0].address1 : "";

  return <DynamicForm address={address} />;
};
