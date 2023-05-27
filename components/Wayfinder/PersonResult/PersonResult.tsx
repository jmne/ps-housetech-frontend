import { Employee } from "types/Employee";
import { useTranslation } from "next-i18next";
import { useMapContext } from "context/MapContext";
import { usePersonSearchContext } from "context/PersonContext";
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import { useCallback, useMemo } from "react";

interface Props {
    person: Employee;
}

export function PersonResult({ person }: Props) {
    const { t } = useTranslation("index");
    const mapContext = useMapContext();
    const selectedPersonContext = usePersonSearchContext();

    const setSelection = useCallback(() => {
        if (selectedPersonContext.current_person === person) {
            selectedPersonContext.setPerson(undefined);
            mapContext.setRoom(undefined);
            mapContext.setBuilding(undefined);
        } else {
            selectedPersonContext.setPerson(person);
            mapContext.setRoom(person.room);
            mapContext.setBuilding(person.building);
        }
    }, [person, mapContext, selectedPersonContext]);

    const phoneTranslation = t("wayfinder.search.phone");
    const roomTranslation = t("wayfinder.search.room");

    return (
        <li
            className={styles.person}
            id={`${person.name}_${person.department}`}
            onClick={setSelection}
        >
            <span>{person.name}</span>
            <span className={styles.caption}>{person.department}</span>
            <div className={styles.hidden}>
                <span className={styles.attribute}>{roomTranslation}</span>
                <span className={styles.caption}>{person.room}</span>
                <br />
                <span className={styles.attribute}>{phoneTranslation}</span>
                <span className={styles.caption}>{person.phone}</span>
                <br />
                <span className={styles.attribute}>{phoneTranslation}</span>
                <span className={styles.caption}>{person.building}</span>
            </div>
        </li>
    );
}