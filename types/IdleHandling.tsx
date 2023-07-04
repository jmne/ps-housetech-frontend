export type Origin =
  | "wayfinder"
  | "map"
  | "busplan"
  | "cafeteriaplan"
  | "events"
  | "instagram"
  | "overlay"
  | "index";

export interface ResetListener {
  origin: Origin;
  resetFunction: Function;
}
