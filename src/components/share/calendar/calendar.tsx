"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer, dayjsLocalizer, Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Menu from "../menu/menu";
import styles from "../calendar/calendar.module.css"
import { TeamEvent } from "./calendar.types";
import { toLocalTime } from "@/utils/format";
import { useMyCalendar } from "./calendar.hooks";
// ใช้งาน plugin ของ dayjs
dayjs.extend(utc);
dayjs.extend(timezone);



const  MyCalendar  =() => {
  
  const {
    eventPropGetter,
    myEvents,
    events,
    localizer
} = useMyCalendar()
  return (
    <div className="h-screen p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        tooltipAccessor={(event) => `📅 ${event.title}`}
        eventPropGetter={eventPropGetter}
        style={{ height: "80vh" }}
      />
    </div>
  );
}
 
export default MyCalendar 