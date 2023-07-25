const url = "https://ps-housetech.uni-muenster.de:444/api/picture/";

export function fetchImage(pictureId: string) {
  const image = fetch(`${url}${pictureId}`)
    .then((r) => r.json())
    .catch((reason) => undefined);

  return image;
}
