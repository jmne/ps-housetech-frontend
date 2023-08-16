import { Button } from "@/components/UI/Button";
import { useRouter } from "next/router";
import { ComponentPropsWithoutRef, useCallback } from "react";
import styles from "./side.module.scss";
import { BirdSelector } from "./BirdSelector";

export default function Side({ ...props }: ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const returnToDashboard = useCallback(
    function () {
      router.push("/", "/");
    },
    [router]
  );

  return (
    <div {...props}>
      <Button onClick={returnToDashboard} className={styles.button}>
        Return to Dashboard
      </Button>
      <div style={{ display: "grid", justifyItems: "center" }}>
        <span className={styles.text}>Bird Color</span>
        <BirdSelector />
      </div>
    </div>
  );
}
