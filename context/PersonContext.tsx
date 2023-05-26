import { createContext, useContext, useState } from "react";
import { Employee } from "types/Employee";

interface PersonData {
    current_person: Employee | undefined,
    setPerson: Function
}

const Person_data = createContext<PersonData>({
    current_person: undefined,
    setPerson: () => { }
})

interface props {
    children: JSX.Element
}

export function SelectedPersonProvider({ children }: props) {
    const [room, setRoom] = useState<Employee | undefined>(undefined)

    let init_state: PersonData = {
        current_person: room,
        setPerson: setRoom
    }

    return (
        <Person_data.Provider value={init_state}>
            {children}
        </Person_data.Provider>
    );
}

export function usePersonSearchContext() {
    return useContext(Person_data)
}