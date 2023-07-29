import { MediaTypes, Post } from "types/Instagram";
import IconClock from "assets/images/icon_clock.svg";
import styles from "./InstagramOverlay.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";

import VideoPlayer from "react-player";
import { Info } from "@/components/Info";
import * as Overlay from "@/components/Overlay";

interface props {
  post: Post;
}

export function InstagramOverlay({ post }: props) {
  const [date] = useState(new Date(post.timestamp));
  const router = useRouter();

  return (
    <Overlay.Container style={{ padding: 0 }}>
      <Overlay.Body className={styles.container}>
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
      </Overlay.Body>
    </Overlay.Container>
  );
}
