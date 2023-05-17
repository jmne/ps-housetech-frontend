// IMPORTS - BUILTINS
import useBusplan from "hooks/useBusplan"
import { useEffect, useState } from "react";

// IMPORTS - COMPONENTS
import Bus from "@/components/Busplan/Bus";

// IMPORTS - ASSETS
import indexStyles from "@/pages/index.module.scss"
import busStyles from "@/components/Busplan/Busplan.module.scss"
import { Busride } from "types/Busride";


/**
 * 
 * @param busses All the data received regarding busses
 * @returns seperate arrays for inward and outward busses
 */
function splitBusses(busses: Busride[]) {
    var inward: Busride[] = [];
    var outward: Busride[] = [];

    // check .direction property to find out if bus is going in or out of the city
    busses.forEach(bus => {
        if (bus.direction === "Einw\u00e4rts") inward.push(bus);
        else outward.push(bus);
    });

    return ({ inward, outward })
}

/**
 * 
 * @returns Busplan showing Busses sorted by "inward" and "outward" busses
 */
export default function Busplan() {
    // Retrieve data and define states for inward & outward busses
    const { data, isLoading, error } = useBusplan();
    const [busses_inward, setInward] = useState<Busride[]>([])
    const [busses_outward, setoutward] = useState<Busride[]>([])

    // Data is initially 0 when waiting for the API response -> retrigger splitBusses when data changes
    useEffect(() => {
        if (isLoading) return;
        if (error) return;
        const { inward, outward } = splitBusses(data);
        setInward(inward);
        setoutward(outward);
    }, [data])

    return (
        <section className={[indexStyles.smallContainer, indexStyles.contentSection].join(" ")}>
            <div className={indexStyles.cardHeadline}>
                <h2>Busplan</h2>
            </div>
            <ol className={busStyles.busplan}>
                {busses_inward.map((bus, index) => (
                    <Bus bus={bus} direction={"inward"} index={index} key={index}/>
                ))}
                {busses_outward.map((bus, index) => (
                    <Bus bus={bus} direction={"outward"} index={index} key={index}/>
                ))}
            </ol>
        </section>
    )
}