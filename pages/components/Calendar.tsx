import styles from "./Calendar.module.css";
import { formatGridTime, minutesToPixel } from "./../utils/helpers";
import { useEvents } from "../utils/hooks";
import Event from "./Event";
import { EventData } from "..";

interface Props {
  events: EventData[];
}

export default function Calendar({ events }: Props) {
  const eventsInfo = useEvents(events);
  const timeSlots = Array.from(Array(24).keys()).slice(0);

  return (
    <div className={styles.wrapper}>
      {timeSlots.map((timeSlot, i) => (
        <div key={i} className={styles.eventRow}>
          <span className={styles.timeLabel}>
            {i !== 0 && formatGridTime(timeSlot)}
          </span>
          <div key={timeSlot} className={styles.eventHolder}></div>
        </div>
      ))}
      {eventsInfo.map((event, i) => (
        <Event
          key={i}
          time={event.start}
          title={event.title}
          width={(1 / event.sameSlotEvents) * 100}
          start={minutesToPixel(event.start)}
          height={minutesToPixel(event.end - event.start)}
          sameSlotEvents={event.sameSlotEvents}
          order={event.order}
        />
      ))}
    </div>
  );
}
