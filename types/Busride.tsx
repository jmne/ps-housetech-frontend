// All possible options for the direction property of a Busride
type Direction = "Einw\u00e4rts" | "Ausw\u00e4rts"

export interface Busride {
    station: string,
    direction: Direction,
    line: string,
    going_to: string,
    planned_departure_time: string,
    actual_departure_time: string,
    minutes_delay: number,
    minutes_until_departure: number
}

// Sample data
export const sample_busrides: Busride[] =
    [
        {
            "station": "Leonardo-Campus",
            "direction": "Einw\u00e4rts",
            "line": "177",
            "going_to": "M\u00fcnster Hauptbahnhof C2",
            "planned_departure_time": "15:32",
            "actual_departure_time": "15:35",
            "minutes_delay": 3,
            "minutes_until_departure": 2
        },
        {
            "station": "Leonardo-Campus",
            "direction": "Einw\u00e4rts",
            "line": "9",
            "going_to": "Hiltrup Franz-Marc-Weg",
            "planned_departure_time": "15:43",
            "actual_departure_time": "15:47",
            "minutes_delay": 4,
            "minutes_until_departure": 14
        },
        {
            "station": "Leonardo-Campus",
            "direction": "Ausw\u00e4rts",
            "line": "9",
            "going_to": "Sprakel",
            "planned_departure_time": "15:32",
            "actual_departure_time": "15:34",
            "minutes_delay": 2,
            "minutes_until_departure": 1
        },
        {
            "station": "Leonardo-Campus",
            "direction": "Ausw\u00e4rts",
            "line": "R72",
            "going_to": "Altenb. Bahnhof",
            "planned_departure_time": "15:41",
            "actual_departure_time": "15:45",
            "minutes_delay": 4,
            "minutes_until_departure": 13
        },
        {
            "station": "Leonardo-Campus",
            "direction": "Ausw\u00e4rts",
            "line": "R72",
            "going_to": "Altenberge",
            "planned_departure_time": "15:55",
            "actual_departure_time": "16:00",
            "minutes_delay": 5,
            "minutes_until_departure": 27
        }
    ]