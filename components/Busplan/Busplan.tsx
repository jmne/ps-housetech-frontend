// IMPORTS - BUILTINS
import useBusplan from "hooks/useBusplan";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

// IMPORTS - COMPONENTS
import Bus from "@/components/Busplan/BusCard";
import * as Card from "@/components/Card";

// IMPORTS - ASSETS
import busplanStyles from "@/components/Busplan/Busplan.module.scss";
import busStyles from "@/components/Busplan/BusCard/Bus.module.scss";
import { Busride } from "types/Busride";
import BusStationMap from "./StationMapOverlay";

/**
 *
 * @param busses All the data received regarding busses
 * @returns seperate arrays for inward and outward busses
 */
function splitBusses(busses: Busride[]) {
  var inward: Busride[] = [];
  var outward: Busride[] = [];

  // check .direction property to find out if bus is going in or out of the city
  busses.forEach((bus) => {
    if (bus.direction === "Einw\u00e4rts") inward.push(bus);
    else outward.push(bus);
  });

  return { inward, outward };
}

/**
 *
 * @returns Busplan showing Busses sorted by "inward" and "outward" busses
 */
export default function Busplan() {
  const { t } = useTranslation("index");

  // Retrieve data and define states for inward & outward busses
  const { data, isLoading, error } = useBusplan();
  const [busses_inward, setInward] = useState<Busride[]>([]);
  const [busses_outward, setoutward] = useState<Busride[]>([]);

  // Data is initially 0 when waiting for the API response -> retrigger splitBusses when data changes
  useEffect(() => {
    if (!data) return;
    if (isLoading) return;
    if (error) return;
    const { inward, outward } = splitBusses(data);
    setInward(inward);
    setoutward(outward);
  }, [data, isLoading, error]);

  return (
    <Card.Container placement="smallBottom">
      <Card.Headline>
        <Card.Title>{t("busplan.title")}</Card.Title>
        <Card.Middle className={busplanStyles.subTitle}>Technologiepark</Card.Middle>
        <Card.End>
          <BusStationMap />
        </Card.End>
      </Card.Headline>
      <Card.Content as="ol" className={busplanStyles.busplan}>
        {isLoading && !error && (
          <span className={busStyles.message}>Bus plan is loading...</span>
        )}
        {error && (
          <span className={busStyles.message}>
            Sorry, there was an error while loading the bus plan
          </span>
        )}
        {!error && data && data.length > 0 && (
          <>
            {busses_inward.map((bus, index) => (
              <Bus bus={bus} direction={"inward"} index={index} key={index} />
            ))}
            {busses_outward.map((bus, index) => (
              <Bus bus={bus} direction={"outward"} index={index} key={index} />
            ))}
          </>
        )}
        {!error && data && data.length === 0 && (
          <span className={busStyles.message}>No Busses incoming</span>
        )}
      </Card.Content>
    </Card.Container>
  );
}
