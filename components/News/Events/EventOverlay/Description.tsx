import * as Overlay from "@/components/Overlay";
import styles from "./EventOverlay.module.scss";
import { useEffect, useRef } from "react";

interface props {
  text: string;
}

export function Description({ text }: props) {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current === null) return;
    descriptionRef.current.innerHTML = text;
  }, [descriptionRef, text]);

  return (
    <Overlay.Body className={styles.description}>
      <div ref={descriptionRef}></div>
    </Overlay.Body>
  );
}
