import * as Overlay from "@/components/UI/Overlay";
import { Overlay as OverlayDrupal } from "types/Drupal";
import styles from "./DrupalOverlay.module.scss";
import { InnerText } from "./InnerText";

interface Props {
  data: OverlayDrupal;
  open: boolean;
  setOpen: Function;
}

export default function Content({ data, open, setOpen }: Props) {
  return (
    <Overlay.Container setOpen={setOpen} open={open} style={{ height: "fit-content" }}>
      <Overlay.Header>
        <Overlay.Title>{data.title}</Overlay.Title>
      </Overlay.Header>
      <Overlay.Body className={styles.body}>
        {data.image && <img className={styles.image} alt="" src={data.image} />}
        {data.description && <InnerText text={data.description} />}
      </Overlay.Body>
    </Overlay.Container>
  );
}
