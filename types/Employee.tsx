export type sortKeysEmployee = "name" | "department"

export interface Employee {
    name: string,
    department: string,
    room: string,
    phone: string
}


export const sampleEmployees = [
    {
        name: "Jens Lechtenboerger",
        department: "Machine Learning",
        room: "022",
        phone: "01578290345"
    },
    {
        name: "Armin Stein",
        department: "Informationsmanagement",
        room: "024",
        phone: "01578290346"
    },
    {
        name: "Michael Räckers",
        department: "Informationsmanagement",
        room: "023",
        phone: "01578290347"
    }
]