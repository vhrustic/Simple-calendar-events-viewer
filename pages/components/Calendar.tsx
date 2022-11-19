import { Card } from "react-bootstrap";
import styles from "./Calendar.module.css";
import { formatGridTime, minutesToPixel } from "./../utils/helpers";
import { useEvents } from "../utils/hooks";
import Event from "./Event";

export default function Calendar({ events }) {
  const eventsInfo = useEvents(events);

  return (
    <div className={styles.wrapper}>
      {Array.from(Array(24).keys())
        .slice(0)
        .map((timeSlot, i) => (
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
