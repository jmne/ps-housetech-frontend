import { buildingNames } from "types/Campus";
import { MapState } from "types/Map";

// Instagram

export const INSTAGRAM_TAG = "wirtschaftsinformatik_wwu"; // Also changes the qr-code linking to the account -> Needs to be the specific tag from insta-account

// Global timeout duration -> When no interaction for the specified time, the site is resetted to the specified base-states
export const TIMEOUT_DURATION = 60; // seconds

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

/**
 * Color values to be imported in Map-Component
 */

export enum COLOR {
  MARKED_AREA = "#25519d", // used for important building & highlighted rooms
  GREEN_AREA = "rgb(133,183,104)",
  NON_MARKED_AREA_BUT_RELEVANT = "#fafafa", // Used for non-highlighted rooms in leo 3 & leo 11
  NORMAL_AREA = "#95989d", // used for e.g., floor and unimportant building
  TEXT_AND_BASIC_ELEMENTS = "#fafafa",
  CONTRAST_STROKE = "#15171b"
}
