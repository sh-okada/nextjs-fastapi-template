"use client";

import { Button } from "@/components/core/button";
import { type ReactNode, useState } from "react";

type ClipBordButtonProps = {
  text: string;
  children: (cliped: boolean) => ReactNode;
};

export const ClipBordButton = ({ text, children }: ClipBordButtonProps) => {
  const [cliped, setCliped] = useState(false);

  const handleClick = async () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCliped(true);
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
