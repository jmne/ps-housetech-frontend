// IMPORTS - ASSETS
import styles from "@/components/Dashboard/Wayfinder/Wayfinder.module.scss";
import IconSearch from "assets/icons/search.svg";
import { useSearchInputContext } from "context/SearchInputContext";
import { useTimeoutContext } from "context/TimeoutContext";
import { useEffect, useRef } from "react";
import { IdleHandler } from "utils/IdleHandling/IdleHandler";

interface props {
  placeholder: string;
}

export function SearchBar({ placeholder }: props) {
  const searchInputContext = useSearchInputContext();
  const timeoutContext = useTimeoutContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (!inputRef.current) return;
    if (document.activeElement !== inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    const resetLayout = () => {
      searchInputContext.setInput("");
      searchInputContext.setActive(false);
      if (inputRef.current) inputRef.current.blur();
    };

    const timeoutHandler = new IdleHandler({
      origin: "searchBar",
      resetFunction: resetLayout.bind(null)
    });

    if (timeoutContext.manager) timeoutContext.manager.addResetListener(timeoutHandler);

    return () => {
      if (timeoutContext.manager) timeoutContext.manager.removeResetListener("searchBar");
    };
  }, [
    searchInputContext.setInput,
    searchInputContext.setActive,
    searchInputContext,
    timeoutContext.manager
  ]);

  return (
    <div
      className={[styles.searchField, styles.background].join(" ")}
      onClick={focusInput}
    >
      <div className={styles.iconWrapper}>
        <IconSearch className={styles.icon} />
      </div>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={searchInputContext.input}
        onChange={(e) => searchInputContext.setInput(e.target.value)}
        onFocus={() => searchInputContext.setActive(true)}
        onBlur={() => searchInputContext.setActive(false)}
        ref={inputRef}
      />
    </div>
  );
}
