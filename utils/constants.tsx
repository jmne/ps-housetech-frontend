import { buildingNames } from "types/Campus";
import { MapState } from "types/Map";

// Global timeout duration -> When no interaction for the specified time, the site is resetted to the specified base-states
export const TIMEOUT_DURATION = 30; // seconds

// Wayfinder
export const WAYFINDER_CARD_ANIMATION_DURATION = 250; // milliseconds

export const FUZZY_SEARCH_WEIGHTS = {
  findAllMatches: true,
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,

  keys: [
    {
      name: "cfFullName",
      weight: 1
    },
    {
      name: "cfFirstNames",
      weight: 0.7
    },
    {
      name: "cfFamilyNames",
      weight: 0.7
    },
    {
      name: "chair",
      weight: 0.5
    }
  ]
};

/**
 * Configuration for map
 */
export const mapTransitionConfig = {
  animationDuration: 500
};

export type out_of_frame_direction = "left" | "right";
export enum animate_to {
  LEO11 = "right",
  LEO3 = "left"
}

export const MAP_BASE_STATE: MapState = {
  area: buildingNames.CAMPUS,
  floor: undefined,
  room: undefined
};
