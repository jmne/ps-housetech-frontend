import Forrest from "assets/flappy/background.jpg";
import Image from "next/image";
import { useFlappyElementsContext } from "../Logic/flappyElements";

export default function Background() {
  const flappyElements = useFlappyElementsContext();
  return (
    <Image
      fill
      alt="Forrest Background"
      src={Forrest}
      style={{ zIndex: 0 }}
      ref={flappyElements.background}
    />
  );
}
