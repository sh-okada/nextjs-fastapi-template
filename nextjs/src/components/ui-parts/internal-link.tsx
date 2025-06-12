import { Link as CoreLink } from "@/components/core/link";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";

export type InternalLinkProps = LinkProps & {
  children?: ReactNode;
};

export const InternalLink = ({ children, ...rest }: InternalLinkProps) => {
  return (
    <CoreLink asChild>
      <Link {...rest}>{children}</Link>
    </CoreLink>
  );
};
