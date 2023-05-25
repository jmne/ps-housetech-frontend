// IMPORTS - BUILTINS
import { useEffect, useState } from "react";

// IMPORTS - HELPERS
import { useEmployeesSorted } from "hooks/useEmployees";
import { Employee, sortKeysEmployee } from "types/Employee";

// IMPORTS - ASSETS
import styles_index from "@/pages/index.module.scss"
import styles_wayfinder from "@/components/Wayfinder/Wayfinder.module.scss"
import { useTranslation } from "next-i18next";
import { SearchBar } from "./SearchBar/SearchBar";
import { PersonResult } from "./PersonResult/PersonResult";

function employeeInFilter(e: Employee, input: string) {
    const input_lower = input.toLowerCase()

    const dep_lower = e.department.toLowerCase()
    const name_lower = e.name.toLowerCase()

    return (dep_lower.includes(input_lower) || name_lower.includes(input_lower))
}

export function Wayfinder() {
    // Translation
    const { t } = useTranslation("index")

    // Get sorted Persons
    const [sortKey, setSortKey] = useState<sortKeysEmployee>("name")
    const persons = useEmployeesSorted(sortKey)

    // Track search inpurt
    const [input, setInput] = useState("")

    // Filter Persons by input -> Repeat when input or persons change
    const [filteredPersons, setFilteredPersons] = useState(persons)
    useEffect(() => {
        console.log(input)

        setFilteredPersons(
            persons.filter(p => { return (employeeInFilter(p, input)) })
        )
    }, [persons, input])

    return (
        <section className={[styles_index.largeContainer, styles_index.contentSection, styles_wayfinder.container].join(" ")}>
            <div className={styles_wayfinder.searchSection}>
                <SearchBar setter={setInput} placeholder={t("wayfinder.title")} />
                <ol>
                    {filteredPersons.map(p =>
                        <PersonResult person={p} key={`${p.name}${p.department}`} />
                    )}
                </ol>
            </div>

        </section>
    )
}