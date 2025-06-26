"use client";

import { Button } from "@/components/core/button";
import { type ReactNode, useRef, useState } from "react";

type ClipBordButtonProps = {
  text: string;
  children: (cliped: boolean) => ReactNode;
};

export const ClipBordButton = ({ text, children }: ClipBordButtonProps) => {
  const [cliped, setCliped] = useState(false);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = async () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCliped(true);
        if (timeRef.current) {
          clearTimeout(timeRef.current);
        }
        timeRef.current = setTimeout(() => {
          setCliped(false);
        }, 1000);
      })
      .catch(() => {
        setCliped(false);
      });
  };

  return (
    <Button className="absolute top-2 right-2" onClick={handleClick}>
      {children(cliped)}
    </Button>
  );
};
