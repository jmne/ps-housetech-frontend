export type Origin =
  | "wayfinder"
  | "map"
  | "busplan"
  | "cafeteriaplan"
  | "news"
  | "events"
  | "overlay"
  | "languageSettings";

export interface ResetListener {
  origin: Origin;
  resetFunction: Function;
}
