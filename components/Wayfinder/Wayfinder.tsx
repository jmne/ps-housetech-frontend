// IMPORTS - BUILTINS
import { useEffect, useState } from "react"

// IMPORTS - HELPERS
import { useEmployeesSorted } from "hooks/useEmployees"
import { Employee, sortKeysEmployee } from "types/Employee"

// IMPORTS - ASSETS
import styles_index from "@/pages/index.module.scss"
import styles_wayfinder from "@/components/Wayfinder/Wayfinder.module.scss"
import { useTranslation } from "next-i18next"
import { SearchBar } from "./SearchBar/SearchBar"
import { PersonResult } from "./PersonResult/PersonResult"
import { CampusMap } from "./Map/CampusMap"

// IMPORTS - CONTEXT
import { usePersonSearchContext } from "context/PersonContext"
import { employeeInFilter, expand, collapse } from "utils/personCardsTransformations"

export function Wayfinder() {
    // Translation setup
    const { t } = useTranslation("index")

    // Global state of the selected person in the list
    const selectedPersonContext = usePersonSearchContext()

    // Internal tracking of the last person that was clicked on the list
    const [current_person, setPerson] = useState<Employee | undefined>()

    // Get data for the list of Persons
    const [sortKey, setSortKey] = useState<sortKeysEmployee>("name")
    const persons = useEmployeesSorted(sortKey)
    const [filteredPersons, setFilteredPersons] = useState(persons)

    // Track search input
    const [input, setInput] = useState("")

    // When input changes, update the persons shown in the list
    useEffect(() => {
        console.log(input)

        setFilteredPersons(persons.filter(p => employeeInFilter(p, input)))
    }, [persons, input])

    // When a person in the list was clicked, update global state & collapse/hide appropriate list elements
    useEffect(() => {
        // Get the global state - Was set in the list element 'PersonResult'
        const p = selectedPersonContext.current_person

        // If nothing was selected before
        if (!current_person) {
            if (!p) return // Nothing is selected now, do nothing

            // Something is selected now, expand person's element and set current_person
            expand(p)
            setPerson(p)
        } else {
            // Something was selected before
            if (p === current_person) {
                // Clicked person matches previous person - Collapse and unset current_person
                collapse(p)
                setPerson(undefined)
            } else {
                // Different person selected - Collapse old, set new person, and expand new person
                collapse(current_person)
                setPerson(p)
                if (p) expand(p)
            }
        }
    }, [selectedPersonContext.current_person])

    return (
        <section className={[styles_index.largeContainer, styles_index.contentSection, styles_wayfinder.container].join(" ")}>
            <div className={styles_wayfinder.searchSection}>
                <SearchBar setter={setInput} placeholder={t("wayfinder.title")} />
                <ol>
                    {filteredPersons.map(p => (
                        <PersonResult person={p} key={`${p.name}${p.department}`} />
                    ))}
                </ol>
            </div>
            <CampusMap />
        </section>
    )
}
