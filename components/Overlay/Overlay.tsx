import { useSearchInputContext } from "context/SearchInputContext";

import indexStyles from "@/pages/index.module.scss"
import { Keyboard } from "@/components/Keyboard/Keyboard";
import { RefObject, useEffect, useRef, useState } from "react";

interface helperProps {
    children: JSX.Element
}

export function Overlay() {
    const [activeKeyboard, setActiveKeyboard] = useState(false)
    const searchInputContext = useSearchInputContext()
    const keyboardRef = useRef<HTMLElement>()

    useEffect(() => {
        if (searchInputContext.active) setActiveKeyboard(true)
        else {
            if (keyboardRef.current) {keyboardRef.current.style.opacity = "0"; console.log("Opacity set")}
            setTimeout(() => {
                setActiveKeyboard(false)
            }, 500)
        }
    }, [searchInputContext.active])

    return (
        <section className={[indexStyles.contentSection, indexStyles.overlayContainer].join(" ")}>
            <span>I wonder what happens if you click the input ;)</span>
            {activeKeyboard
                ? <Keyboard ref={keyboardRef} />
                : <></>}
        </section>
    )
}