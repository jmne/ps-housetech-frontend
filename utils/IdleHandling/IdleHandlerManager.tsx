import { Origin } from "types/IdleHandling";
import { IdleHandler } from "./IdleHandler";

const STORAGE_KEY = "_expiredTime";

interface props {
  timeout: number; // Timeout in seconds before website gets resetted
}

export class IdleHandlerManager {
  timeout: number;
  idle_mode: boolean;
  interval: NodeJS.Timer | undefined;
  IdleHandlers: IdleHandler[];
  eventHandler: EventListenerOrEventListenerObject;

  constructor({ timeout }: props) {
    this.idle_mode = false;
    this.timeout = timeout;
    this.IdleHandlers = [];

    this.eventHandler = this.updateExpiredTime.bind(this);
    this.tracker();
    this.startInterval();
  }

  /**
   *
   * @param listener New ResetListener to register and reset if needed. 'Origin' property used to check if the component is already listened
   */
  addResetListener(listener: IdleHandler) {
    let already_listening = undefined;
    this.IdleHandlers.forEach((handler) => {
      if (handler.origin === listener.origin) {
        handler = listener;
        already_listening = true;
      }
    });

    if (!already_listening) {
      this.IdleHandlers.push(listener);
    }
  }

  /**
   *
   * @param origin Remove the ResetListener belonging to the specified origin (component name)
   */
  removeResetListener(origin: Origin | string) {
    this.IdleHandlers = this.IdleHandlers.filter((entry) => {
      entry.origin != origin;
    });
  }

  /**
   * Call reset functions of each registered component
   */
  resetComponents() {
    this.idle_mode = true;
    this.IdleHandlers.forEach((handler) => {
      handler.reset();
    });
  }

  updateExpiredTime() {
    this.idle_mode = false;
    localStorage.setItem(STORAGE_KEY, `${Date.now() + this.timeout * 1000}`);
  }

  getIdleMode() {
    return this.idle_mode;
  }

  /**
   * Adds appropriate eventListeners to update timer on interaction
   */
  tracker() {
    if (typeof window === "undefined") return;

    window.addEventListener("mousemove", this.eventHandler);
    window.addEventListener("scroll", this.eventHandler);
    window.addEventListener("click", this.eventHandler);
    window.addEventListener("touchstart", this.eventHandler);
    window.addEventListener("touchend", this.eventHandler);
  }

  cleanUp() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
    clearInterval(this.interval);

    window.removeEventListener("mousemove", this.eventHandler);
    window.removeEventListener("scroll", this.eventHandler);
    window.removeEventListener("click", this.eventHandler);
    window.removeEventListener("touchstart", this.eventHandler);
    window.removeEventListener("touchend", this.eventHandler);
  }

  startInterval() {
    if (typeof window === "undefined") return;
    this.updateExpiredTime();

    this.interval = setInterval(() => {
      // If currently in Idle mode -> no need to check timeout
      if (this.idle_mode) return;

      // Check if timeout is reached
      let expiredTime = 0;
      const stored_time = localStorage.getItem(STORAGE_KEY);
      if (typeof stored_time?.valueOf() !== "undefined")
        expiredTime = parseInt(stored_time);

      if (expiredTime < Date.now()) {
        this.resetComponents();
      }
    }, 5000);
  }
}
