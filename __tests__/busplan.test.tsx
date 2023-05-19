import Bus from "@/components/Busplan/Bus";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Busride } from "types/Busride";
import i18n from "../i18-test_config";
import { I18nextProvider } from "react-i18next";

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

describe("Busplan", () => {
    it("Renders a single bus-ride component for the busplan", () => {
        const mounted = mount(
            <I18nextProvider i18n={i18n}>
                <Bus bus={sample_ride} direction={"inward"} index={0} />
            </I18nextProvider>
        )
        // Check for test string
        expect(mounted.contains(sample_ride.line)).toBe(true);
        expect(mounted.contains(sample_ride.going_to)).toBe(true);
        expect(mounted.contains(`${sample_ride.minutes_until_departure} min`)).toBe(true);
    });
});
