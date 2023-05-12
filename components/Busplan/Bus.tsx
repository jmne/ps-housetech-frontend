// IMPORTS - BUILTINS
import dynamic from "next/dynamic";
import Image from "next/image";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";
import styles from "@/components/Busplan/Bus.module.scss";
import icon_inward from "assets/images/icon_city.svg";
import icon_outward from "assets/images/icon_forrest.svg";
import icon_bus from "assets/images/bus.png";
import { useEffect, useState } from "react";

type Direction = "inward" | "outward"

interface BusProps {
    bus: Busride,
    direction: Direction,
    index: number
}

// Array used since 'index' is a number
const getColumn = [styles.first, styles.second, styles.third]

// Dict to use 'direction' string as key
const getRow = {
    "inward": styles.inward,
    "outward": styles.outward
}


/**
 * 
 * @param bus information about the incoming bus as Type Busride
 * @param direction "inward" or "outward" bus
 * @param index used to define position in the grid (top, middle, bottom)
 * @returns Card with information about the bus
 */
export default function Bus({ bus, direction, index }: BusProps) {
    const column = getColumn[index];
    const row = getRow[direction];
    const delayed = (bus.minutes_delay >= 5);

    const time_styling = delayed ? [styles.time, styles.delay].join(" ") : styles.time;


    // Applies classes to the information div & hidden easteregg div to trigger the animation.
    // After 800ms classes are removed and the easteregg is hidden again
    function easteregg() {
        document.getElementById(`busEasteregg${column}${row}`)?.classList.add(styles.animateEasteregg);
        document.getElementById(`busInfo${column}${row}`)?.classList.add(styles.animateBus);

        setTimeout(() => {
            document.getElementById(`busEasteregg${column}${row}`)?.classList.remove(styles.animateEasteregg);
            document.getElementById(`busInfo${column}${row}`)?.classList.remove(styles.animateBus);
        }, 800)
    }

    return (
        <div className={[styles.container, column, row].join(" ")} onClick={easteregg}>
            {/**
             * Styling for the easteregg animation
             */}
            <div className={[styles.background, styles.easteregg].join(" ")} id={`busEasteregg${column}${row}`}>
                <span >Good ride</span>
                <Image src={icon_bus} alt={"Bus"} fill={false} className={styles.iconBus} />
            </div>

            {/**
             * Actual Box that displays the Bus information
             */}
            <div className={[styles.bus, styles.background].join(" ")} id={`busInfo${column}${row}`}>
                <div className={styles.vertical}>
                    <div className={styles.lineWrapper}>
                        {(direction === "inward") ?
                            <Image src={icon_inward} alt={"In"} fill={false} className={styles.icon} /> :
                            <Image src={icon_outward} alt={"Out"} fill={false} className={styles.icon} />
                        }
                        <span className={styles.line}>{bus.line}</span>
                    </div>
                    <span className={styles.secondary}>{bus.going_to}</span>
                </div>
                <div className={styles.vertical}>
                    {delayed ?
                        (<>
                            <span className={time_styling}>{bus.minutes_until_departure} min</span>
                            <span className={[styles.time, styles.secondary].join(" ")}>+{bus.minutes_delay}</span>
                        </>) :
                        (<span className={time_styling}>{bus.minutes_until_departure} min</span>)
                    }
                </div>
            </div>
        </div>
    )
}