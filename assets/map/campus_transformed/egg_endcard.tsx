import { COLOR } from "utils/constants";
import * as Overlay from "@/components/UI/Overlay";
import * as Dialog from "@radix-ui/react-dialog";
import Lottie from "react-lottie-player";

import campfire from "assets/lottie/campfire.json";

import styles from "./endcard.module.scss";

import { useState } from "react";
import { motion } from "framer-motion";

const SCROLL_DURATION = 40;
const SCROLL_DELAY = 1;

const macher = [
  "Simon Biel",
  "Florian Robrecht",
  "Jan Menne",
  "Christoph Knaden",
  "Kevin Schulz",
  "Jingyi Zhang",
  "Ulrich Burkat"
];

export function Endcard({}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <path
          id="egg4"
          d="m0 1078 37.5-39 37.5 36-37.5 39L0 1078Z"
          style={{
            fill: COLOR.NORMAL_AREA,
            fillRule: "nonzero",
            stroke: COLOR.CONTRAST_STROKE,
            strokeWidth: ".75px"
          }}
          transform="translate(254.4 -210)"
        />
      </Dialog.Trigger>
      <Overlay.Container open={open} setOpen={setOpen} className={styles.container}>
        <Overlay.Body className={styles.body}>
          <div className={styles.credits}>
            <motion.ul
              initial={{ y: "70vh" }}
              animate={{ y: `-${macher.length * 18}vh` }}
              transition={{
                duration: SCROLL_DURATION,
                delay: SCROLL_DELAY,
                ease: "linear"
              }}
            >
              {macher.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </motion.ul>
            <motion.span
              className={styles.endMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: SCROLL_DURATION }}
            >
              Cheers!
            </motion.span>
          </div>
          <Lottie className={styles.fire} loop animationData={campfire} play />
        </Overlay.Body>
      </Overlay.Container>
    </Dialog.Root>
  );
}
