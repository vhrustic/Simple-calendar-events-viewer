import { Card } from "react-bootstrap";
import styles from "./Event.module.css";
import { formatStartTime } from "./../utils/helpers";
import { GRID_TIMESLOT_WIDTH } from "../utils/constants";

interface Props {
  time: number;
  title: string;
  start: number;
  width: number;
  height: number;
  order: number;
  sameSlotEvents: number;
}

export default function Event({
  time,
  title,
  start,
  width,
  height,
  order,
  sameSlotEvents,
}: Props) {
  const widthStr = `${width}% - ${GRID_TIMESLOT_WIDTH / sameSlotEvents}px`;
  const calculatedWidth = `calc(${widthStr})`;
  const leftPos = `calc(${order} * (${widthStr}) + ${GRID_TIMESLOT_WIDTH}px)`;

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
        <span className={styles.time} data-testid="event-time">{formatStartTime(time)}</span>
        <span className={styles.title}>{title}</span>
      </Card.Body>
    </Card>
  );
}
