import { Origin } from "types/IdleHandling";

interface props {
  origin: Origin | string; // Name of the calling component
  resetFunction: Function; // Function to call on reset
}

export class IdleHandler {
  origin: Origin | string;
  resetFunction: Function;

  constructor({ origin, resetFunction }: props) {
    this.origin = origin;
    this.resetFunction = resetFunction.bind(this);
  }

  reset() {
    try {
      this.resetFunction();
    } catch {
      console.log(`Exception in ${this.origin}`);
    }
  }
}
