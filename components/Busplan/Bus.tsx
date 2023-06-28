// IMPORTS - BUILTINS
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";
import styles from "@/components/Busplan/Bus.module.scss";

// IMPORTS - ICONS
import IconInward from "assets/images/icon_city.svg";
import IconOutward from "assets/images/icon_forrest.svg";
import icon_bus from "assets/images/bus.png";
import { getColumn, getRow, handleClick } from "./animations";

type Direction = "inward" | "outward";

interface BusProps {
  bus: Busride;
  direction: Direction;
  index: number;
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
  const delayed = bus.minutes_delay >= 5;
  const time_styling = delayed ? [styles.time, styles.delay].join(" ") : styles.time;

  // Used for animation
  const [h_halft, setHeight] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  // Setup of 3d transformations for rotate-animation
  useEffect(() => {
    if (ref.current) setHeight(ref.current.clientHeight / 2);
  }, [ref.current?.clientHeight]);

  useEffect(() => {
    if (h_halft > 0) {
      document.getElementById(
        `busContainer${column}${row}`
      )!.style.transform = `translateZ(-${h_halft}px)`;
      document.getElementById(
        `busInfo${column}${row}`
      )!.style.transform = `rotateY(0deg) translateZ(${h_halft}px)`;
      document.getElementById(
        `busEasteregg${column}${row}`
      )!.style.transform = `rotateX(90deg) translateZ(${h_halft}px)`;
    }
  }, [h_halft, column, row]);

  return (
    <div
      className={[styles.container, column, row].join(" ")}
      onClick={() => handleClick(ref, h_halft)}
      id={`busContainer${column}${row}`}
      ref={ref}
    >
      {/**
       * Styling for the easteregg animation
       */}
      <div
        className={[styles.background, styles.easteregg].join(" ")}
        id={`busEasteregg${column}${row}`}
      >
        <span>Good ride</span>
        <Image src={icon_bus} alt={"Bus"} fill={false} className={styles.iconBus} />
      </div>

      {/**
       * Actual Box that displays the Bus information
       */}
      <div
        className={[styles.bus, styles.background].join(" ")}
        id={`busInfo${column}${row}`}
      >
        <div className={styles.vertical}>
          <div className={styles.lineWrapper}>
            {direction === "inward" ? (
              <IconInward alt={"Goind into City"} className={styles.icon} />
            ) : (
              <IconOutward alt={"Goind out of City"} className={styles.icon} />
            )}
            <span className={styles.line}>{bus.line}</span>
          </div>
          <span className={styles.secondary}>{bus.going_to}</span>
        </div>
        <div className={styles.vertical}>
          {delayed ? (
            <>
              <span className={time_styling}>{bus.minutes_until_departure} min</span>
              <span className={[styles.time, styles.secondary].join(" ")}>
                +{bus.minutes_delay}
              </span>
            </>
          ) : (
            <span className={time_styling}>{bus.minutes_until_departure} min</span>
          )}
        </div>
      </div>
    </div>
  );
}
