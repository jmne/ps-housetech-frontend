import styles from "@/components/UI/Keyboard/Keyboard.module.scss";
import IconDelete from "assets/icons/delete.svg";
import { useSearchInputContext } from "context/SearchInputContext";
import React, { memo, useCallback } from "react";

function Clear() {
  const searchContext = useSearchInputContext();

  const clearInput = useCallback(
    (e: React.MouseEvent) => {
      if (!searchContext.active) return;
      searchContext.setInput("");
      e.preventDefault();
    },
    [searchContext]
  );

  return (
    <button className={styles.key} onMouseDown={(e) => clearInput(e)}>
      <IconDelete className={styles.icon} />
    </button>
  );
}

export default memo(Clear);
