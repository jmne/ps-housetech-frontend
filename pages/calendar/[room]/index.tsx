import Calendar from "@/components/Calendar/Calendar/Calendar";
import Feed from "@/components/Calendar/Feed/Feed";

import styles from "./calendar.module.scss";
import { useEffect } from "react";
import { ErrorBoundary } from "@/components/UI/Card";

function CalendarFeed() {
  useEffect(() => {
    setInterval(() => window.location.reload(), 1000 * 60 * 10); // reload page every 10 minutes
  }, []);
  return (
    <div className={styles.body}>
      <ErrorBoundary>
        <Feed />
      </ErrorBoundary>
      <ErrorBoundary>
        <Calendar />
      </ErrorBoundary>
    </div>
  );
}

export default CalendarFeed;
