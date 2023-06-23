import { BuildingFloor, CampusBuilding, buildingNames } from "types/Campus";
import { addressValue } from "types/Employee";

export function validateRoomNumber(room: string | number) {
  const roomStr = room.toString();

  const validRoomNumber = roomStr.match(/^\d{3}$/);
  if (validRoomNumber) return validRoomNumber[0];

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
export function getFloor(room: number): BuildingFloor {
  const n = typeof room === "number" ? room : parseInt(room);

  if (n < 100) return "floor0";
  if (n < 200) return "floor1";
  if (n < 300) return "floor2";
  if (n < 400) return "floor3";
  // base case
  return "floor0";
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
