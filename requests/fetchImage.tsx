import { REQUEST_URL } from "utils/constants";

const url = `${REQUEST_URL}/api/picture/`;

export function fetchImage(pictureId: string) {
  const image = fetch(`${url}${pictureId}`)
    .then((r) => r.json())
    .catch((reason) => undefined);

  return image;
}
