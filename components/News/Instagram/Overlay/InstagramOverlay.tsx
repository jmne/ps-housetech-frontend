import { useOverlayContext } from "context/OverlayContext";
import { Post } from "types/Instagram";
import IconClock from "assets/images/icon_clock.svg";
import IconClose from "assets/images/icon_close.svg";
import indexStyles from "@/pages/index.module.scss";
import styles from "./InstagramOverlay.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

interface props {
  post: Post;
}

export function InstagramOverlay({ post }: props) {
  const [date] = useState(new Date(post.timestamp));
  const router = useRouter();
  const overlayContext = useOverlayContext();

  function handleClose() {
    overlayContext.setOverlay(undefined);
  }

  return (
    <article className={[indexStyles.overlayContainer, styles.container].join(" ")}>
      <div className={styles.imageContainer}>
        <img src={post.media_url} alt="Picture" />
      </div>
      <div className={styles.timestamp}>
        <IconClock className={styles.clockIcon} />
        <span>
          {date.toLocaleDateString(router.locale == "de" ? "de-de" : "en-gb", {
            weekday: "long",
            month: "long",
            day: "numeric"
          })}
        </span>
      </div>
      <div className={styles.caption}>
        <p>{post.caption}</p>
      </div>
      <button className={indexStyles.close} onClick={handleClose}>
        <IconClose />
      </button>
    </article>
  );
}