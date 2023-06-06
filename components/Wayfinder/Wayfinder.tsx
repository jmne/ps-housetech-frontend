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
import { useSearchInputContext } from "context/SearchInputContext"
import { TIMER_DURATION } from "utils/constants"

interface personRef {
    [id: string]: HTMLLIElement | null,
}

export function Wayfinder() {
    const searchInputContext = useSearchInputContext()

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

    function showPerson(person: Employee) {
        setTimeout(() => {
            expand(person)
        }, 250)
        setPerson(person)
        const personElement = personRefs[`${person.cfFirstNames}${person.cfFamilyNames}`]

        if (!listRef.current || !personElement) return
        const scroll_by = personElement.offsetTop - listRef.current.scrollTop - 5
        listRef.current.scrollBy({ top: scroll_by, behavior: "smooth" })
    }

    function resetLayout() {
        searchInputContext.setActive(false)
        searchInputContext.setInput("")
        if (listRef.current) listRef.current.scrollBy({ top: listRef.current.scrollTop, behavior: "smooth" })
    }

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
        if (searchInputContext.input === "") {
            setFilteredPersons(persons)
            return
        }
        setFilteredPersons(fuse.search(searchInputContext.input).map((e) => e.item))
    }, [persons, searchInputContext.input])

    // When a person in the list was clicked, update global state & collapse/hide appropriate list elements
    useEffect(() => {
        // Get the global state - Was set in the list element 'PersonResult'
        const p = selectedPersonContext.current_person

        // Nothing selected now & nothing selected before
        if (!p && !current_person) null
        // Something selected now
        else if (!p && current_person) {
            collapse(current_person)
            setPerson(undefined)
        }
        // Something selected now and nothing selected before -> Show new person
        else if (p && !current_person) {
            showPerson(p)
        }
        // Something selected now and something selected before
        else {
            if (p === current_person) {
                // Clicked person matches previous person - Collapse and unset current_person
                if (p) collapse(p)
                setPerson(undefined)
            } else {
                // Different person selected - Collapse old, set new person, and expand new person
                if (current_person) collapse(current_person)
                if (p) showPerson(p)
            }
        }
    }, [selectedPersonContext.current_person])

    return (
        <section className={[styles_index.largeContainer, styles_index.contentSection, styles_wayfinder.container].join(" ")}>
            <div className={styles_wayfinder.searchSection}>
                <SearchBar placeholder={t("wayfinder.title")} />
                <ol ref={listRef}>
                    {filteredPersons.map(p => {
                        const unique_id = `${p.cfFirstNames}${p.cfFamilyNames}`
                        return (<PersonResult person={p} key={unique_id} ref={el => personRefs[unique_id] = el} />)
                    })}
                </ol>
            </div>
            <CampusMap />
        </section>
    )
}
