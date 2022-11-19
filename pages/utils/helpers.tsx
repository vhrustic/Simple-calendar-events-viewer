import { ROW_HEIGHT } from "./constants";

export function formatGridTime(time: number) {
  if (time < 10) {
    return `0${time}:00`;
  }
  return `${time}:00`;
}

export function formatStartTime(time: number) {
  const hour = Math.floor(time / 60);
  const minutes = time - hour * 60;
  const hoursFormatted = formatGridTime(hour).substring(0, 2);

  return `${hoursFormatted}:${minutes < 10 ? `${minutes}0` : minutes}`;
}

export function minutesToPixel(duration: number) {
  return (ROW_HEIGHT / 60) * duration;
}
