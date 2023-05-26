import { CampusBuilding } from "./Campus"

export type sortKeysEmployee = "name" | "department"

export interface Employee {
    name: string,
    department: string,
    room: string,
    building: CampusBuilding
    phone: string
}


export const sampleEmployees = [
    {
        name: "Jens Lechtenboerger",
        department: "Machine Learning",
        room: "022",
        building: "leo3",
        phone: "01578290345"
    },
    {
        name: "Armin Stein",
        department: "Informationsmanagement",
        room: "122",
        building: "leo3",
        phone: "01578290346"
    },
    {
        name: "Michael Räckers",
        department: "Informationsmanagement",
        room: "222",
        building: "leo3",
        phone: "01578290347"
    },
    {
        name: "Benedikt Berger",
        department: "Informationsmanagement",
        room: "017",
        building: "leo11",
        phone: "01578290347"
    }
]