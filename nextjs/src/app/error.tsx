"use client";

import { Button } from "@/components/core/button";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center p-4">
      <h2 className="mb-2">予期しないエラーが発生しました。</h2>
      <Button onClick={() => reset()}>もう一度試す</Button>
    </div>
  );
}
