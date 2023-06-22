// Global timeout duration -> When no interaction for the specified time, the site is resetted to the specified base-states
export const TIMEOUT_DURATION = 90; // seconds

// Wayfinder
export const WAYFINDER_CARD_ANIMATION_DURATION = 250; // milliseconds

export const FUZZY_SEARCH_WEIGHTS = {
  findAllMatches: true,
  keys: [
    {
      name: "cfFirstNames",
      weight: 1
    },
    {
      name: "cfFamilyNames",
      weight: 1
    },
    {
      name: "chair",
      weight: 1
    },
    {
      name: "roomNumber",
      weight: 0.5
    }
  ]
};


/**
 * Configuration for map transitions
 */
export const mapTransitionConfig = {
  animationDuration: 750,
  map_x_offset: 5,
  map_y_offset: 15,
  focus_scaling: 1.1,
  not_in_focus_opacity: 0.6,
  map_focus_shadow:
    "drop-shadow(4px 4px 6px rgba(50, 50, 93, 0.20)) drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))"
};

export type out_of_frame_direction = "left" | "right";
export enum animate_to {
  LEO11 = "right",
  LEO3 = "left"
}
