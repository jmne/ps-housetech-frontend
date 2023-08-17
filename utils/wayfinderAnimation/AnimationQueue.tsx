import { executeAnimationSequence } from "./transitions";

export class AnimationQueue {
  private queue: (() => Promise<unknown>)[][] = [];
  private processing = false;

  public enqueue(animations: (() => Promise<unknown>)[]) {
    while (this.queue.length > 1) {
      this.queue.pop();
    }
    this.queue.push(animations);
    this.processQueue(); // start processing if not already processing
  }

  private async processQueue() {
    if (this.processing) return; // if already processing, do nothing
    this.processing = true;
    while (this.queue.length > 0) {
      const animations = this.queue.shift();
      if (animations) {
        await executeAnimationSequence(animations);
      }
    }
    this.processing = false;
  }
}
