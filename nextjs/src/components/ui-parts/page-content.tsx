import type { ReactNode } from "react";

export type PageContentProps = {
  title: string;
  children: ReactNode;
};

export const PageContent = ({ title, children }: PageContentProps) => {
  return (
    <main>
      <h1 className="text-4xl mb-4">{title}</h1>
      {children}
    </main>
  );
};
