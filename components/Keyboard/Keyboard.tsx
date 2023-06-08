import { useSearchInputContext } from "context/SearchInputContext";
import styles from "@/components/Keyboard/Keyboard.module.scss"
import { forwardRef, useMemo } from "react";

interface helperProps {
    keycode: string,
    index: number,
    row: string[],
}

export function Key({ keycode, index, row, ...props }: helperProps) {
    const isLetter = !(["clear", "space", "backspace"].includes(keycode))

    const searchContext = useSearchInputContext()
    function handleKey() {
        if (keycode == "clear") clearInput()
        else if (keycode == "space") appendInput(" ")
        else if (keycode == "backspace") removeChar()
        else (appendInput(keycode))
    }

    function appendInput(newKey: string) {
        const inputLength = searchContext.input.length
        const isCapital = (inputLength === 0) || searchContext.input[inputLength - 1] === " " || searchContext.input[inputLength - 1] === "-"
        searchContext.setInput(`${searchContext.input}${isCapital ? newKey.toUpperCase() : newKey}`)
    }

    function removeChar() {
        searchContext.setInput(searchContext.input.slice(0, searchContext.input.length - 1))
    }

    function clearInput() {
        searchContext.setInput("")
    }

    return (
        <button className={styles.key} onClick={() => handleKey()}>{isLetter ? keycode.toUpperCase() : keycode}</button>
    )
}


export const Keyboard = forwardRef((props, ref) => useMemo(() => {
    const keys = [
        ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä"],
        ["y", "x", "c", "v", "b", "n", "m", "-"],
        ["clear", "space", "backspace"],
    ]

    return (//@ts-ignore
        < article className={styles.container} id="keyboard" ref={ref} >
            {
                keys.map((row, index) => {
                    return (
                        <div className={styles.row} key={index}>
                            {row.map((keycode, index, all) => <Key keycode={keycode} index={index} row={all} key={keycode} />)}
                        </div>
                    )
                })
            }
        </article >
    )
}, []))