import useSWR from "swr";
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import EventData from "./components/Event";
import Calendar from "./components/Calendar";

export interface EventData {
  id: number;
  title: string;
  start: number;
  end: number;
}

interface ApiData {
  events: EventData[];
}

const fetcher = (query: string) =>
  fetch("/api/graphql", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export default function Index() {
  const { data, error } = useSWR(
    "{ events { id, title, start, end } }",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events }: ApiData = data;

  return (
    <div>
      <Calendar events={events} />
    </div>
  );
}
