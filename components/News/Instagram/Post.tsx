import VideoPlayer from "react-player";

import { MediaTypes, Post as PostType } from "types/Instagram";
import styles from "./Instagram.module.scss";
import indexStyles from "@/pages/index.module.scss";

import { useState } from "react";
import { useRouter } from "next/router";
import IconClock from "assets/images/icon_clock.svg";

import { InstagramOverlay } from "./Overlay/InstagramOverlay";

import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "next-i18next";
import { Button } from "@/components/Button";

interface props {
  post: PostType;
}

export function Post({ post }: props) {
  const { t } = useTranslation("index");
  const router = useRouter();

  const [overlayOpen, setOverlayOpen] = useState(false);
  const [date] = useState(new Date(post.timestamp));

  return (
    <Dialog.Root open={overlayOpen} onOpenChange={setOverlayOpen}>
      <Dialog.Trigger asChild>
        <div className={styles.postContainer} onClick={() => setOverlayOpen(true)}>
          <div className={styles.imageContainer}>
            {post.media_type === MediaTypes.VIDEO ? (
              <>
                <VideoPlayer
                  url={post.media_url}
                  style={{ width: "fit-content" }}
                  width={"fit-content"}
                  height={"100%"}
                  playing={false}
                />
                <Button className={styles.videoHint}>
                  {t("news.instagram.click_for_video")}
                </Button>
              </>
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
          <p className={styles.caption}>{post.caption}</p>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content>
          <InstagramOverlay post={post} setOverlayOpen={setOverlayOpen} />
        </Dialog.Content>
        <Dialog.Overlay className={indexStyles.overlayBackground} />
      </Dialog.Portal>
    </Dialog.Root>
  );
}
