export type Origin = "wayfinder" | "map" | "busplan" | "cafeteriaplan" | "news" | "overlay" | "languageSettings"

export interface ResetListener {
    origin: Origin,
    resetFunction: Function
}