import { Employee } from "types/Employee"
import styles from "@/components/Wayfinder/Wayfinder.module.scss"
import { useTranslation } from "next-i18next"

import { useMapContext } from "context/mapContext"
import { usePersonSearchContext } from "context/PersonContext"

interface props {
    person: Employee
}

export function PersonResult({ person }: props) {
    const { t } = useTranslation("index")
    const mapContext = useMapContext()
    const selectedPersonContext = usePersonSearchContext()

    /**
     * Update the global state for selected person & highlighted room
     */
    function setSelection(){
        // Person was selected before -> Unset everything
        if (selectedPersonContext.current_person === person){
            selectedPersonContext.setPerson(undefined)
            mapContext.setRoom(undefined)
        }
        // Other person was selected before -> Set focus on this person
        else {
            console.log("SET NEW")
            selectedPersonContext.setPerson(person)
            mapContext.setRoom(person.room)
        }
    }

    return (
        <li className={styles.person} id={`${person.name}_${person.department}`} onClick={setSelection}>
            <span>{person.name}</span>
            <span className={styles.caption}>{person.department}</span>
            <div className={styles.hidden}>
                <span className={styles.attribute}>{t("wayfinder.search.room")}</span><span className={styles.caption}>{person.room}</span><br />
                <span className={styles.attribute}>{t("wayfinder.search.phone")}</span><span className={styles.caption}>{person.phone}</span>
            </div>
        </li>
    )
}