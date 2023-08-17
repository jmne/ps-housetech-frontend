import { useEffect, useRef } from "react";
import styles from "./DrupalOverlay.module.scss";

interface props {
  text: string;
}

export function InnerText({ text }: props) {
  const contentRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    contentRef.current && (contentRef.current.innerHTML = text);
  }, [text, contentRef]);

  return <p ref={contentRef} className={styles.content} />;
}
