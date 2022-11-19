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
  console.log(width, sameSlotEvents);
  return (
    <Card
      className={styles.wrapper}
      style={{
        width: `calc(${width}% - ${GRID_TIMESLOT_WIDTH}px)`,
        height: `${height}px`,
        top: `${start}px`,
        left: `calc(${order * width}% + ${GRID_TIMESLOT_WIDTH}px)`,
      }}
    >
      <Card.Body className={styles.body}>
        <span className={styles.time}>{formatStartTime(time)}</span>
        <span className={styles.title}>{title}</span>
      </Card.Body>
    </Card>
  );
}
