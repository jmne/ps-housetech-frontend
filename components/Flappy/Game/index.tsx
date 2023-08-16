"use client";

import { ComponentPropsWithoutRef } from "react";
import { Background, Controls } from "./Components";
import styles from "./flappy.module.scss";
import { GameState, useFlappyDataContext } from "./Logic/flappyData";
import { ErrorBoundary } from "@/components/UI/Card";
import { PillarGenerator } from "./Components/Pillars";
import { Bird } from "./Components/Bird";
import { FlappyElementsProvider } from "./Logic/flappyElements";
import { Score } from "./Components/Score";

function FlappyBirdGame({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  const gameData = useFlappyDataContext();
  return (
    <div {...props} className={[className, styles.container].join(" ")}>
      <Background />
      {gameData.state === GameState.RUNNING && (
        <>
          <PillarGenerator />
          <Bird />
        </>
      )}
      {gameData.state !== GameState.PRE_GAME && <Score />}
      <Controls />
    </div>
  );
}

export default function GameWithWrapper({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <ErrorBoundary className={[className, styles.container].join(" ")}>
      <FlappyElementsProvider>
        <FlappyBirdGame {...props} className={[className, styles.container].join(" ")} />
      </FlappyElementsProvider>
    </ErrorBoundary>
  );
}
