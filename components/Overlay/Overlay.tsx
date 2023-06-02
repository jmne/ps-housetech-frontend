import { useSearchInputContext } from "context/SearchInputContext";

import indexStyles from "@/pages/index.module.scss"
import { Keyboard } from "@/components/Keyboard/Keyboard";
import { useEffect } from "react";

interface helperProps {
    children: JSX.Element
}

function Wrapper({ children }: helperProps) {
    return (
        <section className={[indexStyles.contentSection, indexStyles.overlayContainer].join(" ")}>
            {children}
        </section>
    )
}

export function Overlay() {
    const searchInputContext = useSearchInputContext()

    return (
        <Wrapper>
            {searchInputContext.active
                ? <Keyboard />
                : <span>I wonder what happens if you click the input ;)</span>}
        </Wrapper>
    )
}