// IMPORTS - BUILTIN
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// IMPORTS - ASSETS
import styles from "./LanguageSelector.module.scss"
import flag_de from "assets/images/flag/flag_germany.png";
import flag_uk from "assets/images/flag/flag_uk.png";



export function LanguageSelector() {
    const router = useRouter()
    const currentLang = router.locale
    const [animationInProgress, setAnimation] = useState(true)

    // Run once to setup the selector according to first domain
    useEffect(() => {
        const flag_de = document.getElementById("first-lang-button")
        const flag_uk = document.getElementById("second-lang-button")
        const selector = document.getElementById("selector-lang-button")
        if (!(flag_de) || !(flag_uk) || !(selector)) return

        if (currentLang === "en") {
            selector.classList.add(styles.secondSelector)
            flag_uk.classList.add(styles.active)
        }
        else flag_de.classList.add(styles.active)

        // Wait for animation to finish
        setTimeout(() => {
            setAnimation(false)
        }, 500)
    }, [])

    function switchLang() {
        if(animationInProgress) return
        setAnimation(true);
        // Get DOM elements
        const flag_de = document.getElementById("first-lang-button")
        const flag_uk = document.getElementById("second-lang-button")
        const selector = document.getElementById("selector-lang-button")
        if (!(flag_de) || !(flag_uk) || !(selector)) return

        if (currentLang === "en") {
            flag_de.classList.add(styles.active)
            selector.classList.remove(styles.secondSelector)
            flag_uk.classList.remove(styles.active)

            router.push("/", "/", { locale: "de" })
        }
        else {
            flag_de.classList.remove(styles.active)
            selector.classList.add(styles.secondSelector)
            flag_uk.classList.add(styles.active)

            router.push("/", "/", { locale: "en" })
        }
        // Wait for animation to finish
        setTimeout(() => {
            setAnimation(false)
        }, 500)
    }

    return (
        <ul className={styles.wrapper}>
            <li onClick={switchLang} id="first-lang-button">
                <Image src={flag_de} alt="Germany Flag" fill={false} className={styles.flag} />
            </li>
            <li onClick={switchLang} id="second-lang-button">
                <Image src={flag_uk} alt="UK Flag" fill={false} className={styles.flag} />
            </li>
            <span className={styles.selector} id="selector-lang-button"></span>
        </ul>
    )
}