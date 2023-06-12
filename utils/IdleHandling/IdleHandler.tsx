import { Origin } from "types/IdleHandling";

interface props {
  origin: Origin; // Name of the calling component
  resetFunction: Function; // Function to call on reset
}

export class IdleHandler {
  origin: Origin;
  resetFunction: Function;

  constructor({ origin, resetFunction }: props) {
    this.origin = origin;
    this.resetFunction = resetFunction.bind(this);
  }

  reset() {
    this.resetFunction();
  }
}
