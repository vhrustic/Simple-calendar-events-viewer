import { Card } from "react-bootstrap";
import styles from "./Event.module.css";
import { formatStartTime } from "./../utils/helpers";
import { GRID_TIMESLOT_WIDTH } from "../utils/constants";

export default function Event({
  time,
  title,
  start,
  width,
  height,
  order,
  sameSlotEvents,
}) {
  const leftPos = `calc(${order * width}% + ${
    order === 0 ? GRID_TIMESLOT_WIDTH : GRID_TIMESLOT_WIDTH / sameSlotEvents
  }px)`;
  const calculatedWidth = `calc(${width}% - ${
    GRID_TIMESLOT_WIDTH / sameSlotEvents
  }px)`;

  return (
    <Card
      className={styles.wrapper}
      style={{
        width: calculatedWidth,
        height: `${height}px`,
        top: `${start}px`,
        left: leftPos,
      }}
    >
      <Card.Body className={styles.body}>
        <span className={styles.time}>{formatStartTime(time)}</span>
        <span className={styles.title}>{title}</span>
      </Card.Body>
    </Card>
  );
}
