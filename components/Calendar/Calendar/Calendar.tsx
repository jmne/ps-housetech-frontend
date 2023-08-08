import React from "react";

import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "@/components/Calendar/Calendar/Calendar.module.scss";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

function Calendar() {
  return (
    <div className={styles.container}>
      <Container maxWidth={"xl"}>
        <Card className={styles.root}>
          <h1>Belegungsplan</h1>
        </Card>
        <Card className={styles.cardContainer}>
          <FullCalendar
            plugins={[timeGridPlugin, iCalendarPlugin]}
            initialView="timeGridWeek"
            locale={"de"}
            timeZone={"Europe/Berlin"}
            headerToolbar={false}
            allDayText={"24 Std."}
            dayHeaderFormat={{
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }}
            height="100%"
            initialDate={"2023-05-24"}
            slotDuration={"01:00:00"}
            expandRows={true}
            dayMaxEventRows={true}
            editable={false}
            selectable={false}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={false}
            slotMinTime={"08:00:00"}
            slotMaxTime={"22:00:00"}
            nowIndicator={true}
            events={"https://ps-housetech.uni-muenster.de:444/api/calendar"} // add ICS feed or events array here
          />
        </Card>
      </Container>
    </div>
  );
}

export default Calendar;