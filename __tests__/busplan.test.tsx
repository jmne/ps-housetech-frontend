// Testing library
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Bus from "@/components/Busplan/Bus";
import { Busride } from "types/Busride";

const sample_ride: Busride = {
  station: "Leonardo-Campus",
  direction: "Einw\u00e4rts",
  line: "177",
  going_to: "M\u00fcnster Hauptbahnhof C2",
  planned_departure_time: "15:32",
  actual_departure_time: "15:35",
  minutes_delay: 3,
  minutes_until_departure: 2
};
const dir = "inward";
const index = 0;

describe("Busplan", () => {
  it("Renders a single bus-ride component for the busplan", () => {
    render(<Bus bus={sample_ride} direction={"inward"} index={0} />);
    // Check for test string
    expect(screen.getByText(sample_ride.line)).toBeInTheDocument();
    expect(screen.getByText(sample_ride.going_to)).toBeInTheDocument();
    expect(
      screen.getByText(`${sample_ride.minutes_until_departure} min`)
    ).toBeInTheDocument();
  });
});
