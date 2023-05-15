import Bus from "@/components/Busplan/Bus";
import Busplan from "@/components/Busplan/Busplan";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Busride } from "types/Busride";

const sample_ride: Busride = {
    "station": "Leonardo-Campus",
    "direction": "Einw\u00e4rts",
    "line": "177",
    "going_to": "M\u00fcnster Hauptbahnhof C2",
    "planned_departure_time": "15:32",
    "actual_departure_time": "15:35",
    "minutes_delay": 3,
    "minutes_until_departure": 2
}
const dir = "inward";
const index = 0;

describe("Homepage", () => {
    it("renders a sample page", () => {
        render(<Bus bus={sample_ride} direction={"inward"} index={0} />);
        // Check for test string
        expect(screen.getByText(sample_ride.line)).toBeInTheDocument();
        expect(screen.getByText(sample_ride.going_to)).toBeInTheDocument();
        expect(screen.getByText(`${sample_ride.minutes_until_departure} min`)).toBeInTheDocument();
    });
});
