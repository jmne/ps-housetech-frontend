import { forwardRef, useMemo } from "react";
import Pillar from "./Pillar";
import { useFlappyDataContext } from "../../Logic/flappyData";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Props {}

const PillarPair = forwardRef<HTMLImageElement, Props>((props, ref) => {
  const flappyContext = useFlappyDataContext();
  const depth = useMemo(() => random(15, 50), []);
  const height = useMemo(() => random(0.2, 0.7), []);

  return (
    <>
      <Pillar
        ref={ref}
        orientation="up"
        depth={depth}
        height={height}
        color={flappyContext.pillarColor}
      />
      <Pillar
        orientation="down"
        depth={depth}
        height={height}
        color={flappyContext.pillarColor}
      />
    </>
  );
});

PillarPair.displayName = "Pillar Pair";

export default PillarPair;
