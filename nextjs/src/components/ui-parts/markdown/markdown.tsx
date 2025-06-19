import { Col } from "@/components/core/table/parts/col";
import { Colgroup } from "@/components/core/table/parts/colgroup";
import { Td } from "@/components/core/table/parts/td";
import { Tbody } from "@/components/core/table/parts/tdoby";
import { Th } from "@/components/core/table/parts/th";
import { Thead } from "@/components/core/table/parts/thead";
import { Tr } from "@/components/core/table/parts/tr";
import { Table } from "@/components/core/table/table";
import { A } from "@/components/ui-parts/markdown/parts/a";
import { CodeBlock } from "@/components/ui-parts/markdown/parts/code-block";
import { H1 } from "@/components/ui-parts/markdown/parts/h1";
import { H2 } from "@/components/ui-parts/markdown/parts/h2";
import { H3 } from "@/components/ui-parts/markdown/parts/h3";
import { H4 } from "@/components/ui-parts/markdown/parts/h4";
import { H5 } from "@/components/ui-parts/markdown/parts/h5";
import { H6 } from "@/components/ui-parts/markdown/parts/h6";
import { Ol } from "@/components/ui-parts/markdown/parts/ol";
import { Ul } from "@/components/ui-parts/markdown/parts/ul";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export type MarkdownProps = {
  body: string;
};

export const Markdown = ({ body }: MarkdownProps) => {
  const formatMarkdownText = body.replace(/^\s*$/gm, "&nbsp;\n");

  return (
    <ReactMarkdown
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        a: A,
        ul: Ul,
        ol: Ol,
        code: CodeBlock,
      }}
      remarkPlugins={[remarkBreaks]}
    >
      {formatMarkdownText}
    </ReactMarkdown>
  );
};
