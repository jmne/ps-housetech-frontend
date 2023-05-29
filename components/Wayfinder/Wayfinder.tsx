// IMPORTS - BUILTINS
import { Ref, useEffect, useMemo, useRef, useState } from "react"

// IMPORTS - HELPERS
import { useEmployees } from "hooks/useEmployees"
import { Employee } from "types/Employee"

// IMPORTS - ASSETS
import styles_index from "@/pages/index.module.scss"
import styles_wayfinder from "@/components/Wayfinder/Wayfinder.module.scss"
import { useTranslation } from "next-i18next"
import { SearchBar } from "./SearchBar/SearchBar"
import { PersonResult } from "./PersonResult/PersonResult"
import { CampusMap } from "./Map/CampusMap"

// IMPORTS - CONTEXT
import { usePersonSearchContext } from "context/PersonContext"
import { expand, collapse } from "utils/personCardsTransformations"
import Fuse from "fuse.js"

interface personRef {
    [id: string]: HTMLLIElement | null,
}

export function Wayfinder() {
    // Translation setup
    const { t } = useTranslation("index")

    // Global state of the selected person in the list
    const selectedPersonContext = usePersonSearchContext()

    // Internal tracking of the last person that was clicked on the list
    const [current_person, setPerson] = useState<Employee | undefined>()
    const personRefs: personRef = {}
    const listRef = useRef<HTMLOListElement>(null)

    // Get data for the list of Persons
    const persons = useEmployees()
    const [filteredPersons, setFilteredPersons] = useState(persons)

    // Track search input
    const [input, setInput] = useState("")

    // Fuse for fuzzy search
    const fuse = useMemo(() => {
        if (!persons) return new Fuse([])

        const fuse_options = {
            findAllMatches: true,
            keys: [
                {
                    name: "cfFirstNames",
                    weight: 1
                },
                {
                    name: "cfFamilyNames",
                    weight: 1
                },
                {
                    name: "chair",
                    weight: 1
                },
                {
                    name: "roomNumber",
                    weight: 0.5
                }
            ]
        }

        return new Fuse(persons, fuse_options)
    }, persons)

    // When input changes, update the persons shown in the list
    useEffect(() => {
        if (input === "") {
            setFilteredPersons(persons)
            return
        }
        console.log(input)
        setFilteredPersons(fuse.search(input).map((e) => e.item))
        console.log(filteredPersons)
    }, [persons, input])

    // When a person in the list was clicked, update global state & collapse/hide appropriate list elements
    useEffect(() => {
        // Get the global state - Was set in the list element 'PersonResult'
        const p = selectedPersonContext.current_person
        //
        //try {
        //
        //    // Scroll to the selected person
        //    if (p) {
        //        const key = `${p.cfFirstNames}${p.cfFamilyNames}`
        //        const ref = personRefs[key]
        //        console.log(ref)
        //
        //        if (ref) {
        //            const parent = listRef;
        //
        //            // Check if the item is already at the top of the list
        //            // If not, scroll it into view
        //            ref.scrollIntoView({ behavior: "smooth", block: "start" });
        //        }
        //    }
        //} catch {
        //    console.log("Error with ref")
        //}

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
                <ol ref={listRef}>
                    {filteredPersons.map(p => {
                        const k = `${p.cfFirstNames}${p.cfFamilyNames}`
                        return (<PersonResult person={p} key={`${p.cfFirstNames}${p.cfFamilyNames}`} ref={el => personRefs[k] = el} />)
                    })}
                </ol>
            </div>
            <CampusMap />
        </section>
    )
}
