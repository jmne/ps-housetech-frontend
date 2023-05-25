import { Employee } from "types/Employee";
import styles from "@/components/Wayfinder/Wayfinder.module.scss"

interface props {
    person: Employee
}

export function PersonResult({ person }: props) {

    return (
        <li className={styles.person}>
            <span>{person.name}</span>
            <span className={styles.caption}>{person.department}</span>
        </li>
    )
}