import { MediaTypes, Post } from "types/Instagram";
import IconClock from "assets/images/icon_clock.svg";
import IconClose from "assets/images/icon_close.svg";
import indexStyles from "@/pages/index.module.scss";
import styles from "./InstagramOverlay.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

import VideoPlayer from "react-player";
import button_styles from "@/components/Button/Button.module.scss";
import { Info } from "@/components/Info";

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
      <Info className={styles.timestamp}>
        <IconClock className={styles.clockIcon} />
        {date.toLocaleDateString(router.locale == "de" ? "de-de" : "en-gb", {
          weekday: "long",
          month: "long",
          day: "numeric"
        })}
      </Info>
      <p className={styles.caption}>{post.caption}</p>
    </article>
  );
}
