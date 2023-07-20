export type CampusBuilding = "leo1" | "leo3" | "leo10" | "leo11" | "leo18" | "campus" | "davinci";
export type BuildingFloor = "floor0" | "floor1" | "floor2" | "floor3";

export enum buildingNames {
  LEO1 = "leo1",
  LEO3 = "leo3",
  LEO10 = "leo10",
  LEO11 = "leo11",
  LEO18 = "leo18",
  CAMPUS = "campus",
  CAFETERIA = "davinci"
}

export function isCampusBuilding(data: any): data is CampusBuilding {
  if (
    [
      buildingNames.LEO1,
      buildingNames.LEO3,
      buildingNames.LEO10,
      buildingNames.LEO11,
      buildingNames.LEO18,
      buildingNames.CAMPUS,
      buildingNames.CAFETERIA
    ].includes(data)
  )
    return true;
  return false;
}
