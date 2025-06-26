import type { ReactNode } from "react";

export type PageContentProps = {
  title: string;
  children: ReactNode;
};

export const PageContent = ({ title, children }: PageContentProps) => {
  return (
    <main>
      <h1 className="text-[45px] mb-8">{title}</h1>
      {children}
    </main>
  );
};
