import { useSearchInputContext } from "context/SearchInputContext";
import styles from "@/components/Keyboard/Keyboard.module.scss";
import React, { memo, useCallback, useMemo } from "react";

interface helperProps {
  keycode: string;
}

function Letter({ keycode }: helperProps) {
  const searchContext = useSearchInputContext();
  const keycodeUpperCase = useMemo(() => keycode.toUpperCase(), [keycode]);

  const appendInput = useCallback(
    (newKey: string) => {
      const inputLength = searchContext.input.length;
      const isCapital =
        inputLength === 0 ||
        searchContext.input[inputLength - 1] === " " ||
        searchContext.input[inputLength - 1] === "-";
      searchContext.setInput((prev) =>
        [prev, isCapital ? keycodeUpperCase : newKey].join("")
      );
    },
    [searchContext, keycodeUpperCase]
  );

  const handleKey = useCallback(
    (e: React.MouseEvent) => {
      if (!searchContext.active) return;
      appendInput(keycode);

      e.preventDefault();
    },
    [appendInput, keycode, searchContext.active]
  );

  return (
    <button className={styles.key} onMouseDown={(e) => handleKey(e)}>
      {keycodeUpperCase}
    </button>
  );
}

export default memo(Letter);
