"use client ";

import { motion } from "framer-motion";
import pillarGreen from "assets/flappy/pipe-green.png";
import pillarRed from "assets/flappy/pipe-red.png";
import Image from "next/image";
import { forwardRef, memo } from "react";

interface props {
  orientation: "up" | "down";
  depth: number;
  height: number;
  color: "red" | "green";
}

function getHeightOffset(height: number) {
  if (typeof window === "undefined") return 0;

  const rect = (window.innerHeight * 0.9) / 2;

  return height > 0.5 ? (height - 0.5) * rect : -(height * rect);
}

const Pillar = forwardRef<HTMLImageElement, props>(
  ({ orientation, depth, height, color }, ref) => {
    return (
      <motion.div
        className={"pillar"}
        ref={ref}
        initial={
          typeof window !== "undefined" && {
            x: window.innerWidth + 50,
            top: orientation === "down" ? 0 - getHeightOffset(height) - depth : undefined,
            bottom: orientation === "up" ? 0 + getHeightOffset(height) - depth : undefined
          }
        }
        animate={{ x: -100 }}
        transition={{
          duration: 10,
          ease: "linear"
        }}
      >
        <Image
          width={70}
          src={color === "red" ? pillarRed : pillarGreen}
          alt="pillar"
          style={{ transform: orientation === "down" ? "rotate(180deg)" : undefined }}
          priority
        />
      </motion.div>
    );
  }
);

Pillar.displayName = "Pillar";

export default memo(Pillar);
