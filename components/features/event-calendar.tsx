"use client";

// FullCalendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import plLocale from "@fullcalendar/core/locales/pl";

// Interfaces
import { IEvent } from "@/interfaces/event";

export default function EventCalendar({ Events }: { Events?: IEvent[] }) {
  mapEventsToCalendarFormat(Events);

  function mapEventsToCalendarFormat(events: IEvent[] | undefined) {
    if (!events) return [];
    return events.map((event) => ({
      title: event.title,
      date: event.startDate.split("T")[0],
      url: `/wydarzenia/${event.slug}`,
    }));
  }
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      locale={plLocale}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "title",
        right: "dayGridMonth,dayGridWeek,dayGridDay today prev,next",
      }}
      events={[...mapEventsToCalendarFormat(Events)]}
    />
  );
}
