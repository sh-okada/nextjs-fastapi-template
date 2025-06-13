import { Label } from "@/components/core/label";
import type { ComponentProps } from "react";

export const checkboxBaseStyle = `
  appearance-none
  size-4
  rounded-sm
  border border-black
  checked:border-blue-900 checked:bg-blue-900
  before:hidden before:size-4 before:bg-white
  focus-visible:outline focus-visible:outline-4 focus-visible:outline-black focus-visible:outline-offset-2
  checked:before:block checked:before:[clip-path:path('M5.6,11.2L12.65,4.15L11.25,2.75L5.6,8.4L2.75,5.55L1.35,6.95L5.6,11.2Z')]
  disabled:border-gray-500 disabled:bg-gray-300 disabled:checked:border-gray-500 disabled:before:bg-gray-500
  aria-[invalid=true]:border-red-900 aria-[invalid=true]:checked:bg-red-900
`;

export type CheckboxProps = Omit<ComponentProps<"input">, "type"> & {
  isError?: boolean;
};

export const Checkbox = ({
  isError,
  className = "",
  children,
  ...rest
}: CheckboxProps) => {
  return (
    <Label className="flex items-center gap-2">
      <input
        className={`${checkboxBaseStyle} ${className}`}
        type="checkbox"
        aria-invalid={isError || undefined}
        {...rest}
      />
      <span>{children}</span>
    </Label>
  );
};
