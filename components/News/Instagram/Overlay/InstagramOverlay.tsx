import { MediaTypes, Post } from "types/Instagram";
import IconClock from "assets/images/icon_clock.svg";
import IconClose from "assets/images/icon_close.svg";
import indexStyles from "@/pages/index.module.scss";
import styles from "./InstagramOverlay.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

import VideoPlayer from "react-player";

interface props {
  post: Post;
  setOverlayOpen: Function;
}

export function InstagramOverlay({ post, setOverlayOpen }: props) {
  const [date] = useState(new Date(post.timestamp));
  const router = useRouter();

  function handleClose() {
    setOverlayOpen(false);
  }

  return (
    <article className={[indexStyles.overlayContainer, styles.container].join(" ")}>
      <div className={styles.imageContainer}>
        {post.media_type === MediaTypes.VIDEO ? (
          <VideoPlayer
            url={post.media_url}
            style={{ width: "fit-content" }}
            width={"fit-content"}
            height={"100%"}
            playing
            controls
          />
        ) : (
          <img src={post.media_url} alt={"Post Picture"} />
        )}
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
