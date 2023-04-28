import { createRef, RefObject, useEffect, useState } from "react";
import PillarPair from "./PillarPair";

const PILLAR_INTERVAL = 2.5;

interface PillarWithRef {
  e: RefObject<HTMLImageElement>;
  id: number;
}

function PillarGenerator() {
  const [pillars, setPillars] = useState<PillarWithRef[]>([]);

  useEffect(() => {
    const generator = setInterval(() => {
      setPillars((old) => [
        ...old.filter(
          (pipeToCheck) =>
            pipeToCheck.e.current && pipeToCheck.e.current.getBoundingClientRect().x > 0
        ),
        { id: Math.random(), e: createRef() }
      ]);
    }, PILLAR_INTERVAL * 1000);

    return () => {
      clearInterval(generator);
    };
  }, []);

  return (
    <>
      {pillars.map((data) => (
        <PillarPair ref={data.e} key={data.id} />
      ))}
    </>
  );
}

export default function PillarGeneratorWithWrapper() {
  return <PillarGenerator />;
}
