import { useSearchInputContext } from "context/SearchInputContext";
import styles from "@/components/Keyboard/Keyboard.module.scss";
import React, { useCallback, useMemo } from "react";

import IconDelete from "assets/icons/delete.svg";
import Backspace from "./Backspace";

interface helperProps {
  keycode: string;
}

export function Key({ keycode }: helperProps) {
  const isLetter = !["clear", "space", "backspace"].includes(keycode);

  const searchContext = useSearchInputContext();

  const appendInput = useCallback(
    (newKey: string) => {
      const inputLength = searchContext.input.length;
      const isCapital =
        inputLength === 0 ||
        searchContext.input[inputLength - 1] === " " ||
        searchContext.input[inputLength - 1] === "-";
      searchContext.setInput(
        `${searchContext.input}${isCapital ? newKey.toUpperCase() : newKey}`
      );
    },
    [searchContext]
  );

  const clearInput = useCallback(() => {
    searchContext.setInput("");
  }, [searchContext]);

  const handleKey = useCallback(
    (e: React.MouseEvent) => {
      if (!searchContext.active) return;
      if (keycode == "clear") clearInput();
      else if (keycode == "space") appendInput(" ");
      else appendInput(keycode);

      e.preventDefault();
    },
    [appendInput, clearInput, keycode, searchContext.active]
  );

  if (keycode === "clear") {
    return (
      <button className={styles.key} onMouseDown={(e) => handleKey(e)}>
        <IconDelete className={styles.icon} />
      </button>
    );
  }

  if (keycode === "backspace") {
    return <Backspace />;
  }

  return (
    <button className={styles.key} onMouseDown={(e) => handleKey(e)}>
      {isLetter ? keycode.toUpperCase() : keycode}
    </button>
  );
}
function Keyboard() {
  const searchInputContext = useSearchInputContext();

  const innerKeyboard = useMemo(() => {
    const keys = [
      ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
      ["y", "x", "c", "v", "b", "n", "m", "-"],
      ["clear", "space", "backspace"]
    ];

    return (
      <>
        {keys.map((row, index) => {
          return (
            <div className={styles.row} key={index}>
              {row.map((keycode) => (
                <Key keycode={keycode} key={keycode} />
              ))}
            </div>
          );
        })}
      </>
    );
  }, []);

  return (
    <article
      className={
        searchInputContext.active
          ? [styles.container, styles.visible].join(" ")
          : styles.container
      }
      id="keyboard"
      data-testid="keyboard"
    >
      {innerKeyboard}
    </article>
  );
}

Keyboard.displayName = "Keyboard";
export default Keyboard;
