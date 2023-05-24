// IMPORTS - BUILTINS
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// IMPORTS - ASSETS
import { Busride } from "types/Busride";
import styles from "@/components/Busplan/Bus.module.scss";

// IMPORTS - ICONS
import icon_inward from "assets/images/icon_city.svg";
import icon_outward from "assets/images/icon_forrest.svg";
import icon_bus from "assets/images/bus.png";

type Direction = "inward" | "outward";

interface BusProps {
  bus: Busride;
  direction: Direction;
  index: number;
}

// Array used since 'index' is a number
const getColumn = [styles.first, styles.second, styles.third];

// Dict to use 'direction' string as key
const getRow = {
  inward: styles.inward,
  outward: styles.outward
};

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
  const [animRunning, setAnimation] = useState(false);

  // Setup of 3d transformations for rotate-animation
  useEffect(() => {
    if (ref.current) setHeight(ref.current.clientHeight / 2);
  });

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
  }, [h_halft]);

  // Applies classes to the information div & hidden easteregg div to trigger the animation.
  // -> Chance to rotate or wiggle
  function easteregg() {
    // Cancel if an animation is already running
    if (animRunning === true) return;

    // get container and apply animation
    const elem = document.getElementById(`busContainer${column}${row}`);
    if (!elem) return;
    setAnimation(true);

    // Wiggle snippet
    const wiggle = (duration: number) => {
      setTimeout(() => {
        elem.style.transform = `translateZ(-${h_halft}px) rotateX(${10 + 5 * rand}deg)`;
        setTimeout(() => {
          elem.style.transform = `translateZ(-${h_halft}px)`;
          setAnimation(false);
        }, 400);
      }, duration);
    };

    // Start animation variant based on chance
    var hint = false;
    const rand = Math.random();
    if (rand > 0.3) {
      hint = true;
      elem.style.transform = `translateZ(-${h_halft}px) rotateX(-${10 + 30 * rand}deg)`;
    } else
      elem.style.transform = `translateZ(-${h_halft}px) rotateX(-${
        90 + 15 + 5 * rand
      }deg)`;

    // Revert effects -> Different timing based on animation
    if (hint) {
      wiggle(400);
    } else {
      setTimeout(() => {
        elem.style.transform = `translateZ(-${h_halft}px) rotateX(-90deg)`;
        wiggle(1000);
      }, 400);
    }
  }

  return (
    <div
      className={[styles.container, column, row].join(" ")}
      onClick={easteregg}
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
              <Image src={icon_inward} alt={"In"} fill={false} className={styles.icon} />
            ) : (
              <Image
                src={icon_outward}
                alt={"Out"}
                fill={false}
                className={styles.icon}
              />
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
