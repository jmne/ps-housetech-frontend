import { BirdFactory, BirdImages } from "../Factory";
import YellowBirdUp from "assets/flappy/birds/yellow/upflap.png";
import YellowBirdMid from "assets/flappy/birds/yellow/midflap.png";
import YellowBirdDown from "assets/flappy/birds/yellow/downflap.png";

const images: BirdImages = {
  up: YellowBirdUp,
  mid: YellowBirdMid,
  down: YellowBirdDown
};

export function YellowBird() {
  return <BirdFactory images={images} />;
}
