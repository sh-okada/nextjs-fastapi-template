"use client";

import { useCodeMirror } from "@/components/ui-parts/markdown-editor/hooks/use-code-mirror";
import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import {
  HighlightStyle,
  indentUnit,
  syntaxHighlighting,
} from "@codemirror/language";
import { keymap, placeholder } from "@codemirror/view";
import { tags } from "@lezer/highlight";
import { EditorView } from "codemirror";

// const highlightStyle = HighlightStyle.define([
//   { tag: tags.heading1, color: "black", fontSize: "1.4em" },
//   { tag: tags.heading2, color: "black", fontSize: "1.3em" },
//   { tag: tags.heading3, color: "black", fontSize: "1.2em" },
//   { tag: tags.heading4, color: "black", fontSize: "1.1em" },
//   { tag: tags.strong, color: "black", fontWeight: "700" },
//   { tag: tags.quote, color: "#6a737d" },
//   { tag: tags.emphasis, fontStyle: "italic" },
//   { tag: tags.url, textDecoration: "underline" },
//   { tag: tags.strikethrough, textDecoration: "line-through" },
// ]);

export const MarkdownEditor = () => {
  const { editorRef } = useCodeMirror({
    extensions: [
      placeholder("Type your markdown here..."),
      history(),
      keymap.of(defaultKeymap),
      keymap.of(historyKeymap),
      keymap.of([indentWithTab]),
      indentUnit.of("    "),
      // syntaxHighlighting(highlightStyle),
      markdown({
        base: markdownLanguage,
        completeHTMLTags: false,
      }),
      EditorView.theme({
        "&": {
          border: "1px solid #000000",
          borderRadius: "0.375rem",
          fontSize: "16px",
        },
        "&.cm-editor": {
          outline: "none",
        },
        "&.cm-focused": {
          outline: "4px solid #000000",
          outlineOffset: "2px",
        },
        "&:focus-visible": {
          outline: "4px solid #000000",
          outlineOffset: "2px",
        },
        ".cm-content": {
          padding: "12px 16px 12px 16px",
          fontFamily: "Noto Sans JP",
        },
        ".cm-scroller": {
          overflow: "auto",
        },
      }),
    ],
  });

  return <div ref={editorRef} />;
};
