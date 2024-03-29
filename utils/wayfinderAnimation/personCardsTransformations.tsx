import { MapData } from "context/MapContext";
import { PersonData } from "context/PersonContext";
import { Employee } from "types/Employee";
import { getAddressID, getFloor, validateRoomNumber } from "./mapValidations";
import {
  SEARCH_RESULT_COLLAPSED,
  SEARCH_RESULT_EXPANDED
} from "@/components/Dashboard/Wayfinder/PersonResult/PersonResult";
import { buildingNames } from "types/Campus";

/**
 * Collapse the list element for the given person to hide all details.
 * @param p - The person in the list.
 */
function collapse(person: Employee): void {
  const elem = person.searchResultRef?.current;
  if (elem) elem.classList.value = SEARCH_RESULT_COLLAPSED;
}

/**
 * Expand the list element for the given person to show all details.
 * @param p - The person in the list.
 */
function expand(person: Employee): void {
  const elem = person.searchResultRef?.current;
  if (elem) elem.classList.value = SEARCH_RESULT_EXPANDED;
}

function handleExpansion(
  person: Employee,
  expansion: boolean,
  selectedPersonContext?: PersonData
) {
  if (
    selectedPersonContext &&
    typeof selectedPersonContext.current_person !== "undefined" &&
    selectedPersonContext.current_person !== person
  )
    setExpansion(selectedPersonContext.current_person, false);

  setExpansion(person, expansion);
}

function setExpansion(person: Employee, expansion: boolean) {
  if (expansion === true) requestAnimationFrame(() => expand(person));
  else if (expansion === false) requestAnimationFrame(() => collapse(person));
}

function handleClickOnPerson(
  person: Employee,
  mapContext: MapData,
  selectedPersonContext: PersonData
) {
  const previous_selection = {
    person: selectedPersonContext.current_person,
    building: mapContext.current.area,
    room: mapContext.current.room
  };

  const validatedRoomNumber = person.roomNumber
    ? validateRoomNumber(person.roomNumber)
    : undefined;

  const clicked = {
    person: person,
    building:
      person.address && validatedRoomNumber
        ? getAddressID(person.address)
        : buildingNames.CAMPUS,
    room: validatedRoomNumber
  };

  const selectedPersonContext_OLD = { ...selectedPersonContext };

  // Same person clicked -> remove from context
  if (previous_selection.person === clicked.person) {
    selectedPersonContext.setPerson(undefined);
    mapContext.setCurrent({ room: undefined });
    handleExpansion(clicked.person, false, selectedPersonContext_OLD);
    return;
  }
  // Other Person selected -> set context value
  selectedPersonContext.setPerson(clicked.person);
  mapContext.setCurrent({
    area: clicked.building,
    floor: clicked.room ? getFloor(clicked.room) : "floor0",
    room: clicked.room
  });
  handleExpansion(clicked.person, true, selectedPersonContext_OLD);
}

export { collapse, expand, handleExpansion, handleClickOnPerson };
