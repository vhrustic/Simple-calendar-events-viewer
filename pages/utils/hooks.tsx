import { useEffect, useState } from "react";
import { EventData } from "..";

interface EventInfo extends EventData {
  sameSlotEvents: number;
  order: number;
}

export function useEvents(events) {
  const [eventsInfo, setEventsInfo] = useState<EventInfo[]>([]);

  useEffect(() => {
    if (events.length) {
      const eventsCopy = [...events].map((ev) => ({ ...ev }));

      for (let i = 0; i < events.length; ++i) {
        let order = 0;
        eventsCopy[i].sameSlotEvents = 1;
        eventsCopy[i].order = order;
        for (let j = 0; j < events.length; ++j) {
          if (i !== j) {
            if (
              (eventsCopy[i].start >= eventsCopy[j].start &&
                eventsCopy[i].start < eventsCopy[j].end) ||
              (eventsCopy[j].start >= eventsCopy[i].start &&
                eventsCopy[j].start < eventsCopy[i].end)
            ) {
              ++eventsCopy[i].sameSlotEvents;
              eventsCopy[j].order = ++order;
            }
          }
        }
      }
      setEventsInfo(eventsCopy);
    }
  }, [events]);

  return eventsInfo;
}
