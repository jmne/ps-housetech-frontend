export type sortKeysEmployee = "name" | "department"

export interface Employee {
    name: string,
    department: string
}


export const sampleEmployees = [
    {
        name: "Jens Lechtenboerger",
        department: "Machine Learning",
    },
    {
        name: "Armin Stein",
        department: "Informationsmanagement"
    },
    {
        name: "Michael Räckers",
        department: "Informationsmanagement"
    }
]