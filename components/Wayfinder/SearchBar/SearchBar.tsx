// IMPORTS - ASSETS
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import IconSearch from "assets/images/icon_search.svg";
import { useSearchInputContext } from "context/SearchInputContext";
import { useRef } from "react";

interface props {
  placeholder: string;
}

export function SearchBar({ placeholder }: props) {
  const searchInputContext = useSearchInputContext();

  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    if (!inputRef.current) return
    if (document.activeElement !== inputRef.current) inputRef.current.focus()
  }

  return (
    <div
      className={[styles.searchField, styles.background].join(" ")}
      onClick={focusInput}
    >
      <div className={styles.iconWrapper}>
        <IconSearch className={styles.icon} />
      </div>
      <input className={styles.input} placeholder={placeholder} value={searchInputContext.input} onChange={(e) => searchInputContext.setInput(e.target.value)} onFocus={() => searchInputContext.setActive(true)} onBlur={() => searchInputContext.setActive(false)} ref={inputRef}/>
    </div>
  );
}
