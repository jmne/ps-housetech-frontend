import Calendar from "@/components/Calendar/Calendar/Calendar";
import Feed from "@/components/Calendar/Feed/Feed";

import styles from "./calendar.module.scss";
import { useEffect } from "react";

function CalendarFeed() {
  useEffect(() => {
    setInterval(() => window.location.reload(), 1000 * 60 * 10); // reload page every 10 minutes
  }, []);
  return (
    <div className={styles.body}>
      <Feed />
      <Calendar />
    </div>
  );
}

export default CalendarFeed;
