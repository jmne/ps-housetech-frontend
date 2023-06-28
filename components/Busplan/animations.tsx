import styles from "@/components/Busplan/Bus.module.scss";
import { RefObject } from "react";
import { transitionStyle } from "utils/animations";

// Array used since 'index' is a number
export const getColumn = [styles.first, styles.second, styles.third];

// Dict to use 'direction' string as key
export const getRow = {
  inward: styles.inward,
  outward: styles.outward
};

function waitForPromise(duration: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(duration);
    }, duration);
  });
}

export function handleClick(element: RefObject<HTMLDivElement>, heightHalf: number) {
  const el = element.current;
  if (!el) return;

  const chance = Math.random();
  const animations: (() => Promise<unknown>)[] = [];

  if (chance > 0.3) {
    animations.push(wiggleUp.bind(null, el, heightHalf, chance));
  } else {
    animations.push(showBus.bind(null, el, heightHalf, chance));
    animations.push(waitForPromise.bind(null, 2500));
  }
  animations.push(backDown.bind(null, el, heightHalf, chance));

  const executeAnimations = async (animations: (() => Promise<unknown>)[]) => {
    for (let index = 0; index < animations.length; index++) {
      await animations[index]();
    }
  };
  executeAnimations(animations);
}

async function showBus(element: HTMLDivElement, heightHalf: number, intensity: number) {
  await transitionStyle(element, {
    transform: `translateZ(-${heightHalf}px) rotateX(-${90 + 15 + 5 * intensity}deg)`
  });
  return transitionStyle(element, {
    transform: `translateZ(-${heightHalf}px) rotateX(-${90}deg)`
  });
}

function wiggleUp(element: HTMLElement, heightHalf: number, intensity: number) {
  return transitionStyle(element, {
    transform: `translateZ(-${heightHalf}px) rotateX(-${10 + 30 * intensity}deg)`
  });
}

async function backDown(element: HTMLElement, heightHalf: number, intensity: number) {
  await transitionStyle(element, {
    transform: `translateZ(-${heightHalf}px) rotateX(${10 + 5 * intensity}deg)`
  });
  return transitionStyle(element, { transform: `translateZ(-${heightHalf}px)` });
}
