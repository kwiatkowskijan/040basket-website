// Next.js
import { Metadata } from "next";

// Interfaces
import { IEvent } from "@/interfaces/event";

// Services
import { getEvents } from "@/services/event.service";

// Components
import PageTitle from "@/components/sections/page-title";
import BackgroundLogo from "@/components/sections/background-logo";
import EventCalendar from "@/components/features/event-calendar";

export const metadata: Metadata = {
  title: "Wydarzenia - 040 Basket",
  description: "Zobacz nadchodzące wydarzenia związane z 040 Basket.",
};

export default async function EventsCalendar() {
  const response = await getEvents();
  const events: IEvent[] = response.map((event: any) => ({
    title: event.title,
    slug: event.slug,
    startDate: event.startDate,
    endDate: event.endDate,
    type: event.type,
    details: event.details,
  }));
  return (
    <main>
      <PageTitle />
      <section className="w-full container mx-auto min-h-100">
        <div className="w-full px-2 lg:px-0">
          <EventCalendar Events={events} />
        </div>
      </section>
    </main>
  );
}
