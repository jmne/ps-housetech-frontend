import { useCallback, useEffect, useRef } from "react";
import { GameState, useFlappyDataContext } from "../../Logic/flappyData";
import StartScreen from "./StartScreen";

import styles from "./controls.module.scss";
import { useFlappyElementsContext } from "../../Logic/flappyElements";

let dy: number = 450;
let justTouchedPipe = false;

interface ElementWithRect {
  e: HTMLDivElement | HTMLImageElement;
  rect: DOMRect;
}

export function Controls() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameData = useFlappyDataContext();
  const flappyElements = useFlappyElementsContext();

  const dataRef = useRef(gameData);
  const elementsRef = useRef(flappyElements);

  const play = useCallback(() => {
    dy = 450;

    function handlePipeTouchingBird(
      pipe: ElementWithRect,
      bird: ElementWithRect
    ): boolean {
      const PIPE_TOUCHES_BIRD =
        bird.rect.left < pipe.rect.left + pipe.rect.width &&
        bird.rect.left + bird.rect.width > pipe.rect.left &&
        bird.rect.top < pipe.rect.top + pipe.rect.height &&
        bird.rect.top + bird.rect.height > pipe.rect.top;

      if (PIPE_TOUCHES_BIRD) {
        dataRef.current.setState(GameState.OVER);
        return true;
      }
      return false;
    }

    function handlePipeDodged(
      pipe: ElementWithRect,
      bird: ElementWithRect,
      countPoint: boolean
    ) {
      const PIPE_DODGED =
        bird.rect.left < pipe.rect.left + pipe.rect.width &&
        bird.rect.left + bird.rect.width > pipe.rect.left;

      if (PIPE_DODGED) {
        if (countPoint) dataRef.current.setScore((old) => old + 0.5);
        return true;
      }
      return false;
    }

    function handleStuff() {
      const elements = elementsRef.current;

      if (!elements.bird?.current || !elements.background?.current) return;

      const allPipes = document.querySelectorAll(".pillar");

      const bird: ElementWithRect = {
        e: elements.bird.current,
        rect: elements.bird.current.getBoundingClientRect()
      };

      if (
        bird.rect.top <= 0 ||
        !containerRef.current ||
        bird.rect.top >= containerRef.current.getBoundingClientRect().height
      ) {
        dataRef.current.setState(GameState.OVER);
      }

      let justTouchedPipe_forLoop = justTouchedPipe;
      let touchedPipeInLoop = false;

      allPipes.forEach((pipe) => {
        const pipeWithRect: ElementWithRect = {
          e: pipe as HTMLDivElement,
          rect: pipe.getBoundingClientRect()
        };

        if (handlePipeTouchingBird(pipeWithRect, bird)) return;
        if (handlePipeDodged(pipeWithRect, bird, !justTouchedPipe_forLoop))
          touchedPipeInLoop = true;
      });

      justTouchedPipe = touchedPipeInLoop;
      requestAnimationFrame(handleStuff);
    }

    requestAnimationFrame(handleStuff);
  }, [dataRef, elementsRef]);

  const applyGravity = useCallback(() => {
    const elements = elementsRef.current;
    const data = dataRef.current;

    if (!elements.bird?.current) return;
    const bird = elements.bird.current;

    const downForce = data.gravity;

    dy = dy + downForce;

    bird.style.top = `${dy}px`;

    requestAnimationFrame(applyGravity);
  }, [dataRef, elementsRef]);

  const handleClick = useCallback(() => {
    switch (gameData.state) {
      case GameState.PRE_GAME: {
        gameData.setScore(0);
        gameData.setState(GameState.RUNNING);
        break;
      }
      case GameState.RUNNING: {
        dy -= 200;
        break;
      }
      case GameState.OVER: {
        gameData.setState(GameState.PRE_GAME);
        break;
      }
    }
  }, [gameData]);

  useEffect(() => {
    if (gameData.state === GameState.RUNNING) {
      play();
      applyGravity();
      dy = flappyElements.bird?.current?.getBoundingClientRect().top ?? 450;
    }
  }, [
    gameData.state,
    flappyElements.background,
    flappyElements.bird,
    applyGravity,
    play
  ]);

  return (
    <div ref={containerRef} className={styles.container} onClick={handleClick}>
      {gameData.state === GameState.PRE_GAME && <StartScreen />}
    </div>
  );
}
