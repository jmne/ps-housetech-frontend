import { useSearchInputContext } from "context/SearchInputContext";
import styles from "./Keyboard.module.scss";
import React, { memo, useMemo } from "react";

import { Backspace, Clear, Letter, Space } from "@/components/UI/Keyboard/Keys";

const KEYBOARD_KEYS = [
  ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
  ["y", "x", "c", "v", "b", "n", "m", "-"]
];

function Keyboard() {
  const searchInputContext = useSearchInputContext();

  const innerKeyboard = useMemo(() => {
    return (
      <>
        {KEYBOARD_KEYS.map((row, index) => {
          return (
            <div className={styles.row} key={index}>
              {row.map((keycode) => (
                <Letter keycode={keycode} key={keycode} />
              ))}
            </div>
          );
        })}
        <div className={styles.row}>
          <Clear />
          <Space />
          <Backspace />
        </div>
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
export default memo(Keyboard);
