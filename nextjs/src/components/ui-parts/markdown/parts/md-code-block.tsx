import type { ComponentProps } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export type MdCodeBlockProps = ComponentProps<"code"> & {
  inline?: boolean;
};

export const MdCodeBlock = ({
  inline = false,
  className,
  children,
}: MdCodeBlockProps) => {
  if (inline) {
    return <code className={className}>{children}</code>;
  }

  const match = /language-(\w+)/.exec(className || "");
  if (!match) {
    return <code className={className}>{children}</code>;
  }

  const lang = match[1] ?? undefined;

  return (
    <SyntaxHighlighter style={vscDarkPlus} language={lang}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};
