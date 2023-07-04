import { Post as PostType } from "types/Instagram";
import styles from "./Instagram.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import IconClock from "assets/images/icon_clock.svg";
import { useOverlayContext } from "context/OverlayContext";
import { InstagramOverlay } from "./Overlay/InstagramOverlay";

interface props {
  post: PostType;
}

export function Post({ post }: props) {
  const [date] = useState(new Date(post.timestamp));
  const router = useRouter();

  const overlayContext = useOverlayContext()

  function showOverlay() {
    overlayContext.setOverlay(<InstagramOverlay post={post} />)
  }

  return (
    <div className={styles.postContainer} onClick={showOverlay}>
      <div className={styles.imageContainer}>
        <img src={post.media_url} alt={"Post Picture"} />
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
      <p className={styles.caption}>{post.caption}</p>
    </div>
  );
}
