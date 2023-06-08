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
import { useTimeoutContext } from "context/TimeoutContext"
import { WAYFINDER_CARD_ANIMATION_DURATION } from "utils/constants"
import { useMapContext } from "context/MapContext"

interface personRef {
    [id: string]: HTMLLIElement | null,
}

export function Wayfinder() {
    // Global state of the selected person in the list
    const selectedPersonContext = usePersonSearchContext()
    const searchInputContext = useSearchInputContext()
    const timeoutContext = useTimeoutContext()
    const mapContext = useMapContext()

    // Translation setup
    const { t } = useTranslation("index")

    // Internal tracking of the last person that was clicked on the list
    const [current_person, setPerson] = useState<Employee | undefined>()
    const personRefs: personRef = {}
    const listRef = useRef<HTMLOListElement>(null)

    // Get data for the list of Persons
    const persons = useEmployees()
    const [filteredPersons, setFilteredPersons] = useState(persons)

    // Define reset function and add it to the global timeout-handler
    function resetLayout() {
        // Reset all states
        selectedPersonContext.setPerson(undefined)
        searchInputContext.setActive(false)
        searchInputContext.setInput("")

        // Scroll list to top
        if (listRef.current) listRef.current.scrollBy({ top: listRef.current.scrollTop, behavior: "smooth" })
    }

    timeoutContext.handler.addResetListener({
        origin: "wayfinder",
        resetFunction: resetLayout
    })


    function showPerson(person: Employee) {
        setTimeout(() => {
            expand(person)
        }, WAYFINDER_CARD_ANIMATION_DURATION)
        setPerson(person)
        const personElement = personRefs[`${person.cfFirstNames}${person.cfFamilyNames}`]

        if (!listRef.current || !personElement) return
        const scroll_by = personElement.offsetTop - listRef.current.scrollTop - 5
        listRef.current.scrollBy({ top: scroll_by, behavior: "smooth" })
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
