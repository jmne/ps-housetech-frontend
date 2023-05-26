// IMPORTS - BUILTINS
import Image from "next/image"

// IMPORTS - ASSETS
import styles from "@/components/Wayfinder/Wayfinder.module.scss"
import IconSearch from "assets/images/icon_search.svg"

interface props {
    setter: Function,
    placeholder: string
}

export function SearchBar({ setter, placeholder }: props) {
    return (
        <div className={[styles.searchField, styles.background].join(" ")}>
            <div className={styles.iconWrapper}>
                <IconSearch className={styles.icon} />
            </div>
            <input className={styles.input} type="text" onChange={(e) => setter(e.target.value)} placeholder={placeholder} />
        </ div>
    )
}