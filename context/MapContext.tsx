import { createContext, useContext, useState } from "react";
import { CampusBuilding } from "types/Campus";

interface MapData {
    current_room: string | undefined,
    setRoom: Function,
    current_building: CampusBuilding | undefined,
    setBuilding: Function
}

const Map_data = createContext<MapData>({
    current_room: undefined,
    setRoom: () => {},
    current_building: undefined,
    setBuilding: () => {}
})

interface props {
    children: JSX.Element
}

export function MapProvider({ children }: props) {
    const [room, setRoom] = useState<string | undefined>(undefined)
    const [building, setBuilding] = useState<CampusBuilding | undefined>(undefined)
    
    let init_state: MapData = {
        current_room: room,
        setRoom: setRoom,
        current_building: building,
        setBuilding: setBuilding
    }

    return (
        <Map_data.Provider value={init_state}>
            {children}
        </Map_data.Provider>
    );
}

export function useMapContext(){
    return useContext(Map_data)
}