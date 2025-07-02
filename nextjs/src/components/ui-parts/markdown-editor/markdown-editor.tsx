"use client";

import { useMarkdownEditor } from "@/components/ui-parts/markdown-editor/hooks/useMarkdownEditor";

export const MarkdownEditor = () => {
  const { editorRef } = useMarkdownEditor();

  return <div ref={editorRef} />;
};
