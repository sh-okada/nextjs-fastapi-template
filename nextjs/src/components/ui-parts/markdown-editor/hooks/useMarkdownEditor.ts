import {
  defaultKeymap,
  history,
  historyKeymap,
  indentWithTab,
} from "@codemirror/commands";
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import { keymap, placeholder } from "@codemirror/view";
import { EditorView } from "codemirror";
import { useEffect, useRef, useState } from "react";

export const useMarkdownEditor = () => {
  const editorRef = useRef(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (editorRef.current) {
      setContainer(editorRef.current);
    }
  }, [setContainer]);

  useEffect(() => {
    if (!view && container) {
      const state = EditorState.create({
        extensions: [
          placeholder("Type your markdown here..."),
          history(),
          keymap.of(defaultKeymap),
          keymap.of(historyKeymap),
          keymap.of([indentWithTab]),
          indentUnit.of("    "),
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
      const viewCurrent = new EditorView({
        state,
        parent: container,
      });
      setView(viewCurrent);
    }
  }, [view, container]);

  return {
    editorRef,
  };
};
