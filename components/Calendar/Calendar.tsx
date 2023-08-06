import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "@/components/Calendar/Calendar.module.scss";

function Calendar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Belegungsplan</h1>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        locale={"de"}
        headerToolbar={{
          left: "",
          center: "",
          right: ""
        }}
        dayHeaderFormat={{ weekday: "long", month: "long", day: "numeric" }}
        height="95%"
        editable={false}
        selectable={false}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={false}
        events={[
          { title: "All Day Event", date: "2023-08-08", color: "red" },
          { title: "All Day Event", date: "2023-08-09", color: "red" }
        ]}
      />
    </div>
  );
}

export default Calendar;
