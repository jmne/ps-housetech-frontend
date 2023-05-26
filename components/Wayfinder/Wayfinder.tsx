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
import { CampusMap } from "./Map/CampusMap";

// IMPORTS - CONTEXT
import { usePersonSearchContext } from "context/PersonContext";


/**
 * Check if a person is to be shown for the given input
 * @param e single Person
 * @param input input in search field
 * @returns Boolean if input string is in some attribute of Person
 */
function employeeInFilter(e: Employee, input: string) {
    const input_lower = input.toLowerCase()

    const dep_lower = e.department.toLowerCase()
    const name_lower = e.name.toLowerCase()

    return (dep_lower.includes(input_lower) || name_lower.includes(input_lower))
}

/**
 * Collapse list element for the give person to hide all details
 * @param p Person in list
 */
function collapse(p: Employee) {
    const elem = document.getElementById(`${p.name}_${p.department}`)
    if (elem) elem.classList.remove(styles_wayfinder.expanded)
}

/**
 * Expand list element for the given person to show all details
 * @param p Person in list
 */
function expand(p: Employee) {
    const elem = document.getElementById(`${p.name}_${p.department}`)
    if (elem) elem.classList.add(styles_wayfinder.expanded)
}

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

    // Track search inpurt
    const [input, setInput] = useState("")

    // When input changes -> Update the persons shown in the list
    useEffect(() => {
        console.log(input)

        setFilteredPersons(
            persons.filter(p => { return (employeeInFilter(p, input)) })
        )
    }, [persons, input])


    // When a person in the list was clicked -> Update global state & collapse/hide appropriate list elements
    useEffect(() => {
        // Get the global state -> Was set in the list element 'PersonResult'
        const p = selectedPersonContext.current_person
        
        // If nothing was selected before 
        if (!current_person) {
            if (!p) return; // & nothing is selected now -> Do nothing

            // & something selected now -> expand persons element & set current_person
            expand(p)
            setPerson(p)
        }
        
        // Something was selected before
        else {
            // Clicked person matches previous person -> Collapse and unset current_person
            if (p === current_person) {
                collapse(p)
                setPerson(undefined)
            }
            // Different person selected -> Collapse old + set new person & expand new person
            else {
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
                    {filteredPersons.map(p =>
                        <PersonResult person={p} key={`${p.name}${p.department}`} />
                    )}
                </ol>
            </div>
            <CampusMap />
        </section>
    )
}