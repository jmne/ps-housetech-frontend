import * as Card from "@/components/Card";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Weather/RainRadar/Map"), {
  loading: () => <span>Loading...</span>,
  ssr: false
});

export function RainRadar() {
  return (
    <Card.Content>
      <Map />
    </Card.Content>
  );
}
