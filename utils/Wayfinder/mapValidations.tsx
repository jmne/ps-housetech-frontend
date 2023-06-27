import { TFunction, useTranslation } from "next-i18next";
import {
  BuildingFloor,
  CampusBuilding,
  buildingNames,
  isCampusBuilding
} from "types/Campus";
import { Employee, addressValue } from "types/Employee";

export function validateRoomNumber(room: string | number) {
  const roomStr = room.toString();

  const validRoomNumber = roomStr.match(/^\d{3}$/);
  if (validRoomNumber) {
    if (parseInt(validRoomNumber[0]) >= 400) return undefined;
    return validRoomNumber[0];
  }

  const sequenceOfThreeDigits = roomStr.match(/(?<!\d)\d{3}(?!\d)/);
  if (sequenceOfThreeDigits) return sequenceOfThreeDigits[0];

  return undefined;
}

export function getAddressID(address: addressValue) {
  if (address === "Leonardo-Campus 11") return buildingNames.LEO11;
  if (address === "Leonardo-Campus 3") return buildingNames.LEO3;
  else return undefined;
}

/**
 * Get the floor level of a room as BuildingFloor value
 * @param room Number of the room
 * @returns Floor level as BuildingFloor value
 */
export function getFloor(room: number | string): BuildingFloor {
  const n = typeof room === "number" ? room : parseInt(room);

  if (n < 100) return "floor0";
  if (n < 200) return "floor1";
  if (n < 300) return "floor2";
  if (n < 400) return "floor3";
  // base case
  return "floor0";
}

export function getFloorFromIndex(index: number): BuildingFloor {
  switch (index) {
    case 0:
      return "floor0";
    case 1:
      return "floor1";
    case 2:
      return "floor2";
    case 3:
      return "floor3";
    default:
      return "floor0";
  }
}

export function getFloorIndex(floor: BuildingFloor) {
  return parseInt(floor.charAt(5));
}

/**
 * Get the floor level of a room as a number
 * @param room Number of the room
 * @returns Floor level as a number
 */
export function getFloorNumber(room: number): number {
  const floorString = getFloor(room);
  const n_string = floorString.charAt(5);
  const n = parseInt(n_string);

  return n;
}

/**
 * Check if a room is in the current building
 * CURRENTLY ONLY CONFIGURED TO WORK FOR THE TEST-DATA
 * @param room Room number
 * @param current_building Current building
 * @returns Boolean indicating if the room is in the current building
 */
export function roomInBuilding(
  building_of_room: CampusBuilding,
  current_building: CampusBuilding
): boolean {
  if (building_of_room === current_building) return true;
  else return false;
}

export function getRoomDisplayName(room: string) {
  const validatedRoomNumber = validateRoomNumber(room);
  if (validatedRoomNumber) return validatedRoomNumber;

  if (isCampusBuilding(room)) return getCampusBuildingDisplayName(room);

  const lowerCase = room.toLowerCase();
  if (lowerCase.includes("wc")) return "WC";
  if (lowerCase.includes("hausmeister")) return "Hausmeister";

  return "";
}

export function getCampusBuildingDisplayName(building: CampusBuilding) {
  switch (building) {
    case buildingNames.CAMPUS:
      return "Campus";
    case buildingNames.LEO1:
      return "Leo 1";
    case buildingNames.LEO3:
      return "Leo 3";
    case buildingNames.LEO10:
      return "Leo 10";
    case buildingNames.LEO11:
      return "Leo 11";
    case buildingNames.LEO18:
      return "Leo 18";
  }
}

export function getPersonForRoom(
  building: CampusBuilding,
  room: string,
  persons: Employee[],
  t: TFunction
) {
  if (building === buildingNames.CAMPUS) {
    switch (room) {
      case buildingNames.LEO1:
        return [t("wayfinder.map.brazil_center"), t("wayfinder.map.wi_ag")];
      case buildingNames.LEO3:
        return [t("wayfinder.map.wwu_center_europe")];
      case buildingNames.LEO10:
        return [`${t("wayfinder.map.lecture_hall")} Leo 1`, `${t("wayfinder.map.lecture_hall")} Leo 2`];
      case buildingNames.LEO11:
        return undefined;
      case buildingNames.LEO18:
        return [`${t("wayfinder.map.lecture_hall")} Leo 18.3`];
      default:
        return undefined;
    }
  }

  const personsInFilter = [];

  for (const person of persons) {
    if (
      getAddressID(person.address) === building &&
      person.roomNumber &&
      person.roomNumber.includes(room)
    )
      personsInFilter.push(`${person.cfFirstNames} ${person.cfFamilyNames}`);
  }

  if (personsInFilter.length > 0) return personsInFilter;
  else return undefined;
}
