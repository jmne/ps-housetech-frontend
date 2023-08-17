import { BirdFactory, BirdImages } from "../Factory";
import RedBirdUp from "assets/flappy/birds/red/upflap.png";
import RedBirdMid from "assets/flappy/birds/red/midflap.png";
import RedBirdDown from "assets/flappy/birds/red/downflap.png";

const images: BirdImages = {
  up: RedBirdUp,
  mid: RedBirdMid,
  down: RedBirdDown
};

export function RedBird() {
  return <BirdFactory images={images} />;
}
