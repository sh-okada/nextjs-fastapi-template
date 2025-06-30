"use client";

import { Button } from "@/components/core/button";
import { ErrorText } from "@/components/core/error-text";
import { Field } from "@/components/core/field";
import { Input } from "@/components/core/input";
import { Section } from "@/components/core/section/section";
import {
  getFormProps,
  getInputProps,
  useField,
  useForm,
  useFormMetadata,
} from "@conform-to/react";

type SearchedAddress = {
  zipcode: string;
  address1: string;
  address2: string;
  address3: string;
};

export type DynamicFormProps = {
  searchedAddress?: SearchedAddress;
};

export const DynamicForm = ({ searchedAddress }: DynamicFormProps) => {
  const form = useFormMetadata();
  const [name] = useField<string>("name");
  const [zipcode] = useField<string>("zipcode");
  const [address] = useField<string>("address");

  return (
    <form
      className="flex flex-col gap-4"
      {...getFormProps(form)}
      onSubmit={form.onSubmit}
    >
      <Section>
        <Section.Header>個人情報の入力</Section.Header>
        <Section.Content className="flex flex-col gap-4">
          <Field>
            <Field.Label htmlFor={name.id}>氏名</Field.Label>
            <Input
              placeholder="田中太郎"
              {...getInputProps(name, { type: "text" })}
              key={name.key}
              defaultValue={name.value ?? name.initialValue}
            />
            <ErrorText>{name.errors}</ErrorText>
          </Field>
          <Field>
            <Field.Label htmlFor={zipcode.id}>郵便番号</Field.Label>
            <div className="flex gap-4">
              <Input
                placeholder="1234567"
                {...getInputProps(zipcode, { type: "text" })}
                key={zipcode.key}
                defaultValue={searchedAddress?.zipcode ?? zipcode.initialValue}
              />
              <Button type="submit" name="intent" value="search">
                住所検索
              </Button>
            </div>
            <ErrorText>{zipcode.errors}</ErrorText>
          </Field>
          <Field>
            <Field.Label htmlFor={address.id}>住所</Field.Label>
            <Input
              placeholder="広島県広島市中区大手町11-10 NHK広島放送センタービル"
              {...getInputProps(address, { type: "text" })}
              key={address.key}
              defaultValue={
                [
                  searchedAddress?.address1,
                  searchedAddress?.address2,
                  searchedAddress?.address3,
                ].join("") ?? address.initialValue
              }
            />
            <ErrorText>{address.errors}</ErrorText>
          </Field>
        </Section.Content>
      </Section>
      <Button className="w-full" type="submit">
        登録
      </Button>
    </form>
  );
};
