import { Markdown } from "@/components/ui-parts/markdown/markdown";

export type DocProps = {
  title: string;
  text: string;
};

export const Doc = ({ title, text }: DocProps) => {
  return <Markdown body={text} />;
};
