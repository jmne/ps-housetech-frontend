import { useSearchInputContext } from "context/SearchInputContext";

import indexStyles from "@/pages/index.module.scss"
import { Keyboard } from "@/components/Keyboard/Keyboard";

interface helperProps {
    children: JSX.Element
}

export function Overlay() {
    const searchInputContext = useSearchInputContext()

    return (
        <section className={[indexStyles.contentSection, indexStyles.overlayContainer].join(" ")}>
            <span>I wonder what happens if you click the input ;)</span>
            {searchInputContext.active
                ? <Keyboard/>
                : <></>}
        </section>
    )
}