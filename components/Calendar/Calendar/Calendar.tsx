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
            events={{
              url: "https://gist.githubusercontent.com/jmne/20ad05f5b37190899744d0d75aecf6d1/raw/b86800bbc5c8be5740dae7b2149b417787d8d261/gistfile1.txt",
              format: "ics"
            }} // add ICS feed or events array here
          />
        </Card>
      </Container>
    </div>
  );
}

export default Calendar;
