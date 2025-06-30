import { getDoc } from "@/api/doc/doc";
import { Doc } from "@/app/(private)/doc/[slug]/_components/doc";
import type { ReactNode } from "react";

export type DocContainerProps = {
  id: string;
  children: (title: string) => ReactNode;
};

export const DocContainer = async ({ id, children }: DocContainerProps) => {
  const doc = (await getDoc(id)).data;

  return (
    <>
      {children(doc.title)}
      <Doc title={doc.title} text={doc.text} />
    </>
  );
};
