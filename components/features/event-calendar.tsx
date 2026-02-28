"use client";

// FullCalendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// Interfaces
import { IEvent } from "@/interfaces/event";

export default function EventCalendar({ Events }: { Events?: IEvent[] }) {
  mapEventsToCalendarFormat(Events);

  function mapEventsToCalendarFormat(events: IEvent[] | undefined) {
    if (!events) return [];
    return events.map((event) => ({
      title: event.title,
      date: event.startDate.split("T")[0],
    }));
  }
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[...mapEventsToCalendarFormat(Events)]}
    />
  );
}
