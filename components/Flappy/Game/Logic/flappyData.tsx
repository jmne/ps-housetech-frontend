import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState
} from "react";

export type BirdColor = "blue" | "yellow" | "red";

const DEATH_DURATION = 1;
const GRAVITY = 5;
const SPEED = 5;

export interface FlappyData {
  speed: number;
  gravity: number;
  score: number;
  state: State;
  pillarColor: "green" | "red";
  birdColor: BirdColor;
  setScore: Dispatch<SetStateAction<number>>;
  setState: (value: State) => void;
  setBirdColor: Dispatch<SetStateAction<BirdColor>>;
}

export type State = "running" | "preGame" | "justDied" | "gameOver";
export enum GameState {
  RUNNING = "running",
  PRE_GAME = "preGame",
  DYING = "justDied",
  OVER = "gameOver"
}

const FlappyDataContext = createContext<FlappyData>({
  speed: SPEED,
  gravity: GRAVITY,
  pillarColor: "green",
  birdColor: "blue",
  score: 0,
  state: GameState.PRE_GAME,
  setScore: () => {},
  setState: () => {},
  setBirdColor: () => {}
});

export function FlappyDataProvider({ children }: PropsWithChildren) {
  const [score, setScore] = useState(0);
  const [state, setState] = useState<State>(GameState.PRE_GAME);
  const [birdColor, setBirdColor] = useState<BirdColor>("blue");

  const updateState = useCallback((value: State) => {
    if (value === GameState.OVER) {
      setState(GameState.DYING);
      setTimeout(() => {
        setState(GameState.OVER);
      }, DEATH_DURATION * 1000);
    } else {
      setState(value);
    }
  }, []);

  return (
    <FlappyDataContext.Provider
      value={{
        speed: SPEED,
        gravity: GRAVITY,
        pillarColor: "green",
        birdColor: birdColor,
        score: score,
        state: state,
        setScore: setScore,
        setState: updateState,
        setBirdColor: setBirdColor
      }}
    >
      {children}
    </FlappyDataContext.Provider>
  );
}

export function useFlappyDataContext() {
  return useContext(FlappyDataContext);
}
