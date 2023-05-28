import { Employee } from "types/Employee";
import { useTranslation } from "next-i18next";
import { useMapContext } from "context/MapContext";
import { usePersonSearchContext } from "context/PersonContext";
import styles from "@/components/Wayfinder/Wayfinder.module.scss";
import { useCallback } from "react";

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
            mapContext.setRoom(person.roomNumber);
            mapContext.setBuilding("leo3");
        }
    }, [person, mapContext, selectedPersonContext]);

    const phoneTranslation = t("wayfinder.search.phone");
    const roomTranslation = t("wayfinder.search.room");

    return (
        <li
            className={styles.person}
            id={`${person.cfFamilyNames}${person.phone}${person.chair}`}
            onClick={setSelection}
        >
            <span>{`${person.cfFirstNames} ${person.cfFamilyNames}`}</span>
            <span className={styles.caption}>{person.chair}</span>
            <div className={styles.hidden}>

                {person.phone
                    ? <><span className={styles.attribute}>{phoneTranslation}</span>
                        <span className={styles.caption}>{person.phone}</span>
                        <br /></>
                    : <></>
                }
                {person.email
                    ? <><span className={styles.attribute}>Mail</span>
                        <span className={styles.caption}>{person.email}</span>
                        <br /></>
                    : <></>
                }
                {person.phone
                    ? <><span className={styles.attribute}>{roomTranslation}</span>
                        <span className={styles.caption}>{person.roomNumber}</span>
                        <br /></>
                    : <></>
                }
            </div>
        </li>
    );
}