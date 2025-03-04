import { useState } from "react";
import { Calendar, dateFnsLocalizer, dayjsLocalizer, Event } from "react-big-calendar";
import { TeamEvent } from "./calendar.types";
import { toLocalTime } from "@/utils/format";
import dayjs from "dayjs";
export const useMyCalendar =()=>{
    const localizer = dayjsLocalizer(dayjs)
// ข้อมูลการจองห้องประชุม (เวลาตามโซนไทย)
    const events: TeamEvent[] = [
        {
          title: "ประชุมทีม A",
          start: toLocalTime("2025-03-05T10:00:00Z"), // 5 มีนาคม 2025 เวลา 10:00 ไทย
          end: toLocalTime("2025-03-05T11:30:00Z"), // 5 มีนาคม 2025 เวลา 11:30 ไทย
          team:"QA"
        },
        {
          title: "RVP",
          start: toLocalTime("2025-03-06T14:00:00Z"),
          end: toLocalTime("2025-03-09T15:00:00Z"),
          team:"RVP"
        },
        {
          title: "ADD",
          start: toLocalTime("2025-03-06T14:00:00Z"),
          end: toLocalTime("2025-03-06T15:00:00Z"),
          team:"ADD"
        },
      ];
      
    const [myEvents, setMyEvents] = useState<Event[]>(events);
   

    const eventPropGetter = (event: TeamEvent) => {
        const teamColors: { [key: string]: string } = {
          RVP: "#FF5733", // สีของทีม A
          B: "#33FF57", // สีของทีม B
          // เพิ่มสีของทีมอื่น ๆ ที่นี่
        };
      
        const backgroundColor = teamColors[event.team] || "#3174ad"; // สีเริ่มต้นถ้าไม่ตรงกับทีมใด
      
        return {
          style: {
            backgroundColor,
            borderRadius: "8px",
            border: "none",
          },
        };
      };
    return {
        eventPropGetter,
        myEvents,
        events,
        localizer

    }
}
