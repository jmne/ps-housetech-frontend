import { useSearchInputContext } from "context/SearchInputContext";
import styles from "@/components/Keyboard/Keyboard.module.scss";
import { useMemo } from "react";

import IconDelete from "assets/images/icon_delete.svg";
import IconBackspace from "assets/images/icon_backspace.svg";

interface helperProps {
  keycode: string;
}

export function Key({ keycode }: helperProps) {
  const isLetter = !["clear", "space", "backspace"].includes(keycode);

  const searchContext = useSearchInputContext();
  function handleKey(e: Event) {
    if (!searchContext.active) return;
    if (keycode == "clear") clearInput();
    else if (keycode == "space") appendInput(" ");
    else if (keycode == "backspace") removeChar();
    else appendInput(keycode);

    e.preventDefault();
  }

  function appendInput(newKey: string) {
    const inputLength = searchContext.input.length;
    const isCapital =
      inputLength === 0 ||
      searchContext.input[inputLength - 1] === " " ||
      searchContext.input[inputLength - 1] === "-";
    searchContext.setInput(
      `${searchContext.input}${isCapital ? newKey.toUpperCase() : newKey}`
    );
  }

  function removeChar() {
    searchContext.setInput(searchContext.input.slice(0, searchContext.input.length - 1));
  }

  function clearInput() {
    searchContext.setInput("");
  }

  if (keycode === "clear") {
    return (
      //@ts-ignore
      <button className={styles.key} onMouseDown={(e) => handleKey(e)}>
        <IconDelete className={styles.icon} />
      </button>
    );
  }

  if (keycode === "backspace") {
    return (
      //@ts-ignore
      <button className={styles.key} onMouseDown={(e) => handleKey(e)}>
        <IconBackspace className={styles.icon} />
      </button>
    );
  }

  return (
    //@ts-ignore
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
