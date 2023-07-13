import { Post as PostType } from "types/Instagram";
import styles from "./Instagram.module.scss";
import indexStyles from "@/pages/index.module.scss"

import { useState } from "react";
import { useRouter } from "next/router";
import IconClock from "assets/images/icon_clock.svg";

import { InstagramOverlay } from "./Overlay/InstagramOverlay";

import * as Dialog from "@radix-ui/react-dialog";

interface props {
  post: PostType;
}

export function Post({ post }: props) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const [date] = useState(new Date(post.timestamp));
  const router = useRouter();

  return (
    <Dialog.Root open={overlayOpen} onOpenChange={setOverlayOpen}>
      <Dialog.Trigger asChild>
        <div className={styles.postContainer} onClick={() => setOverlayOpen(true)}>
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
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={indexStyles.overlayBackground} />
        <Dialog.Content asChild>
          <InstagramOverlay post={post} setOverlayOpen={setOverlayOpen} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
