import { BuildingFloor, CampusBuilding } from "./Campus";

export interface MapState {
  area: CampusBuilding | undefined;
  floor: BuildingFloor | undefined;
  room: string | undefined;
}
