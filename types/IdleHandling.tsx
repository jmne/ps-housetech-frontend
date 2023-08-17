export type Origin =
  | "wayfinder"
  | "map"
  | "busplan"
  | "cafeteriaplan"
  | "events"
  | "instagram"
  | "overlay"
  | "index"
  | "weather"
  | "searchBar"
  | "language";

export interface ResetListener {
  origin: Origin;
  resetFunction: Function;
}
