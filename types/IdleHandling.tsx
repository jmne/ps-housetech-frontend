export type Origin =
  | "wayfinder"
  | "map"
  | "busplan"
  | "cafeteriaplan"
  | "news"
  | "events"
  | "overlay"
  | "index";

export interface ResetListener {
  origin: Origin;
  resetFunction: Function;
}
