import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useFlappyElementsContext } from "../../Logic/flappyElements";
import styles from "./bird.module.scss";

export interface BirdImages {
  up: StaticImageData;
  mid: StaticImageData;
  down: StaticImageData;
}

interface props {
  images: BirdImages;
}

const WING_SPEED = 120;

export function BirdFactory({ images }: props) {
  const flappyElementsContext = useFlappyElementsContext();
  const [imageData, setImageData] = useState(images.mid);
  const [imageState, setImageState] = useState<0 | 1 | 2>(1);
  const direction = useRef<"up" | "down">("up");

  useEffect(() => {
    const animationHandler = setInterval(() => {
      switch (direction.current) {
        case "up": {
          setImageState((old) => {
            if (old === 0) return 1;
            if (old === 1) return 2;
            direction.current = "down";
            return 1;
          });
          break;
        }
        case "down": {
          setImageState((old) => {
            if (old === 2) return 1;
            if (old === 1) return 0;
            direction.current = "up";
            return 1;
          });
          break;
        }
      }
    }, WING_SPEED);

    return () => {
      clearInterval(animationHandler);
    };
  }, []);

  useEffect(() => {
    if (imageState === 0) setImageData(images.down);
    if (imageState === 1) setImageData(images.mid);
    if (imageState === 2) setImageData(images.up);
  }, [imageState, images.down, images.mid, images.up]);

  return (
    <div className={styles.bird} ref={flappyElementsContext.bird}>
      <Image src={imageData} alt="Bird" width={50} />
    </div>
  );
}
