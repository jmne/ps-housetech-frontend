// IMPORTS - ASSETS
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import IconSearch from "assets/images/icon_search.svg";
import { useSearchInputContext } from "context/SearchInputContext";

interface props {
  placeholder: string;
}

export function SearchBar({ placeholder }: props) {
  const searchInputContext = useSearchInputContext();

  const containerStyles = searchInputContext.active
    ? [styles.searchField, styles.background, styles.focus]
    : [styles.searchField, styles.background];
  const inputStyles = searchInputContext.active
    ? [styles.input, styles.focus].join(" ")
    : styles.focus;

  return (
    <div
      className={containerStyles.join(" ")}
      onClick={() => searchInputContext.setActive(!searchInputContext.active)}
    >
      <div className={styles.iconWrapper}>
        <IconSearch className={styles.icon} />
      </div>
      <div className={inputStyles}>
        {searchInputContext.input === "" ? (
          <span>{placeholder}</span>
        ) : (
          <span>{searchInputContext.input}</span>
        )}
      </div>
    </div>
  );
}
