// IMPORTS - BUILTINS
import Image from "next/image"

// IMPORTS - ASSETS
import styles from "@/components/Wayfinder/Wayfinder.module.scss"
import icon_search from "assets/images/icon_search.svg"

interface props {
    setter: Function,
    placeholder: string
}

export function SearchBar({ setter, placeholder }: props) {
    return (
        <div className={styles.searchField}>
            <Image src={icon_search} alt={"search icon"} fill={false} className={styles.icon} />
            <input className={styles.input} type="text" onChange={(e) => setter(e.target.value)} placeholder={placeholder}/>
        </ div>
    )
}