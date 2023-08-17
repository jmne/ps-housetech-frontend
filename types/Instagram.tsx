export interface Post {
  caption: string;
  media_url: string;
  media_type: MediaTypes;
  timestamp: string;
}

export enum MediaTypes {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  CAROUSEL = "CAROUSEL_ALBUM"
}
