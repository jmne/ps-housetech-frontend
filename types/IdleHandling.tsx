export type Origin =
  | "wayfinder"
  | "map"
  | "busplan"
  | "cafeteriaplan"
  | "news"
  | "overlay"
  | "index";

export interface ResetListener {
  origin: Origin;
  resetFunction: Function;
}
