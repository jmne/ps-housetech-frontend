import styles from "@/components/Keyboard/Keyboard.module.scss";
import IconBackspace from "assets/icons/backspace.svg";
import { useSearchInputContext } from "context/SearchInputContext";
import React, { useCallback, useRef } from "react";

const INTERVAL_CLEAR_SPEED = 200;

export default function Backspace() {
  const intervalRef = useRef<any>();
  const searchContext = useSearchInputContext();

  const removeChar = useCallback(() => {
    searchContext.setInput((old) => old.slice(0, old.length - 1));
  }, [searchContext]);

  const mouseDown = useCallback(
    (e: React.MouseEvent) => {
      intervalRef.current = setInterval(() => {
        removeChar();
      }, INTERVAL_CLEAR_SPEED);
      e.preventDefault();
    },
    [removeChar]
  );

  const mouseUp = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  return (
    <button
      className={styles.key}
      onMouseDown={(e) => mouseDown(e)}
      onMouseUp={() => mouseUp()}
    >
      <IconBackspace className={styles.icon} />
    </button>
  );
}
