import React from "react";

import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import timeGridPlugin from "@fullcalendar/timegrid";
import styles from "@/components/Calendar/Calendar/Calendar.module.scss";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import { useRouter } from "next/router";
import { REQUEST_URL } from "utils/constants";

function Calendar() {
  return (
    <div className={styles.container}>
      <Container maxWidth={"xl"}>
        <Card className={styles.root}>
          <h1>Belegungsplan - {useRouter().query.room}</h1>
        </Card>
        <Card className={styles.cardContainer}>
          <FullCalendar
            plugins={[timeGridPlugin, iCalendarPlugin]}
            initialView="timeGridWeek"
            //timeZone={"Europe/Berlin"}
            locale={"de"}
            headerToolbar={{
              left: "",
              center: "prev,next today",
              right: ""
            }}
            buttonText={{ today: "Heute" }}
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
            events={`${REQUEST_URL}/api/calendar/` + useRouter().query.room} // add ICS feed or events array here
          />
        </Card>
      </Container>
    </div>
  );
}

export default Calendar;
