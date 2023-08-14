// IMPORTS - BUILTINS
import Image from "next/image";
import * as RotationItem from "@/components/UI/RotationItem";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";
import styles from "@/components/Dashboard/Busplan/BusCard/Bus.module.scss";

// IMPORTS - ICONS
import IconInward from "assets/icons/city.svg";
import IconOutward from "assets/icons/forrest.svg";
import IconBus from "assets/images/bus_housetech.svg?url";
import { getColumn, getRow } from "./animations";

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

  return (
    <RotationItem.Root className={[styles.container, column, row].join(" ")}>
      <RotationItem.Front className={styles.bus}>
        <div className={styles.vertical}>
          <div className={styles.lineWrapper}>
            {direction === "inward" ? (
              <IconInward alt={"Going into City"} className={styles.icon} />
            ) : (
              <IconOutward alt={"Going out of City"} className={styles.icon} />
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
      </RotationItem.Front>
      <RotationItem.Back className={styles.easteregg}>
        <span>Good ride</span>
        <Image src={IconBus} alt="Bus" className={styles.iconBus} priority />
      </RotationItem.Back>
    </RotationItem.Root>
  );
}
