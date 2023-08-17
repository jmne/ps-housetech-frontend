import * as Card from "@/components/UI/Card";
import dynamic from "next/dynamic";
import styles from "./rainRadar.module.scss";

const Map = dynamic(() => import("@/components/Dashboard/Weather/RainRadar/Map"), {
  loading: () => <span>Loading...</span>,
  ssr: false
});

export function RainRadar() {
  return (
    <Card.Content className={styles.container}>
      <Map />
    </Card.Content>
  );
}
