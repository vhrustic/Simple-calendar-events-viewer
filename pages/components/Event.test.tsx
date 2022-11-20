import Event from "./Event";
import { render, screen } from "@testing-library/react";

describe("Event component", () => {
  it("renders time in human readable format", () => {
    render(
      <Event
        time={150}
        title="Event title"
        width={100}
        start={450}
        height={200}
        sameSlotEvents={2}
        order={1}
      />
    );

    expect(screen.getByTestId("event-time").textContent).toEqual("02:30");
  });
});
