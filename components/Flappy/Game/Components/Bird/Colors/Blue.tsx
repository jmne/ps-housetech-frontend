import { BirdFactory, BirdImages } from "../Factory";
import BlueBirdUp from "assets/flappy/birds/blue/upflap.png";
import BlueBirdMid from "assets/flappy/birds/blue/midflap.png";
import BlueBirdDown from "assets/flappy/birds/blue/downflap.png";

const images: BirdImages = {
  up: BlueBirdUp,
  mid: BlueBirdMid,
  down: BlueBirdDown
};

export function BlueBird() {
  return <BirdFactory images={images} />;
}
