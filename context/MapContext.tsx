import { createContext, useContext, useState } from "react";

interface MapData {
    current_room: string | undefined,
    setRoom: Function
}

const Map_data = createContext<MapData>({
    current_room: undefined,
    setRoom: () => {}
})

interface props {
    children: JSX.Element
}

export function MapProvider({ children }: props) {
    const [room, setRoom] = useState<string | undefined>(undefined)
    
    let init_state: MapData = {
        current_room: room,
        setRoom: setRoom
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