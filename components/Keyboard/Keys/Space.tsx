import styles from "@/components/Keyboard/Keyboard.module.scss";
import SpaceIcon from "assets/icons/space.svg";
import { useSearchInputContext } from "context/SearchInputContext";
import React, { memo, useCallback } from "react";

function Space() {
  const searchContext = useSearchInputContext();

  const clearInput = useCallback(
    (e: React.MouseEvent) => {
      if (!searchContext.active) return;
      searchContext.setInput((prev) => [prev, ""].join(" "));
      e.preventDefault();
    },
    [searchContext]
  );

  return (
    <button className={styles.key} onMouseDown={(e) => clearInput(e)}>
      <SpaceIcon className={[styles.icon, styles.space].join(" ")} />
    </button>
  );
}

export default memo(Space);
