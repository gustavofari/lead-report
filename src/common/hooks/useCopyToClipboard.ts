/**
 * useCopyToClipboard Hook
 * Handles copy to clipboard with feedback
 */

import { useState, useCallback } from "react";

interface UseCopyToClipboardOptions {
  resetDelay?: number;
}

interface UseCopyToClipboardReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
}

export function useCopyToClipboard(
  options: UseCopyToClipboardOptions = {},
): UseCopyToClipboardReturn {
  const { resetDelay = 2000 } = options;
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetDelay);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    },
    [resetDelay],
  );

  return { copied, copy };
}
