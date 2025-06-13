"use client";

import { Button } from "@/components/core/button";
import { InternalLink } from "@/components/ui-parts/internal-link";
import { paths } from "@/config/paths";
import { getFormProps, useField, useFormMetadata } from "@conform-to/react";

export const ConfirmProfile = () => {
  const form = useFormMetadata();
  const [joiningDate] = useField<Date>("joiningDate");

  return (
    <form
      className="flex flex-col"
      {...getFormProps(form)}
      onSubmit={form.onSubmit}
    >
      {joiningDate.value}
      <Button type="submit">登録</Button>
      <InternalLink href={paths.profile.getHref()}>
        入力内容を修正する
      </InternalLink>
    </form>
  );
};
