import IconCall from "assets/icons/call.svg";
import IconMail from "assets/icons/mail.svg";
import QRCode from "react-qr-code";
import styles from "./person.module.scss";
import { Info } from "@/components/Info";

interface props {
  type: "phone" | "mail";
  value: string;
}

export function QRContact({ type, value }: props) {
  const Icon = type === "phone" ? IconCall : IconMail;
  return (
    <div className={styles.qrContainer}>
      <QRCode
        bgColor="#fafafa"
        fgColor="#15171b"
        size={225}
        value={value}
        className={styles.code}
      />
      <Info className={styles.qrContainerDescription}>
        <Icon /> {value}
      </Info>
    </div>
  );
}
