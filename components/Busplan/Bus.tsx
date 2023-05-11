// IMPORTS - BUILTINS
import dynamic from "next/dynamic";
import Image from "next/image";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";
import styles from "@/components/Busplan/Busplan.module.scss";
import icon_inward from "assets/images/icon_city.svg";
import icon_outward from "assets/images/icon_forrest.svg";
import { useEffect, useState } from "react";

type Direction = "inward" | "outward"

interface BusProps {
    bus: Busride,
    direction: Direction,
    index: number
}

function getColumn(index: number) {
    switch (index) {
        case 0:
            return styles.first;
        case 1:
            return styles.second;
        default:
            return styles.third;
    }
}

function getRow(direction: Direction) {
    switch (direction) {
        case "inward":
            return styles.inward;
        case "outward":
            return styles.outward;
    }
}

export default function Bus({ bus, direction, index }: BusProps) {
    const column = getColumn(index);
    const row = getRow(direction);
    const delayed = (bus.minutes_delay >= 5)

    const time_styling = delayed ? [styles.time, styles.delay].join(" ") : styles.time;

    return (
        <div className={[styles.bus, column, row].join(" ")}>
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
    )
}