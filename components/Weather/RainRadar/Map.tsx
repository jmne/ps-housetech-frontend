import { LatLngTuple } from "leaflet";
import { memo, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const locationMuenster: LatLngTuple = [51.96, 7.628];
const url = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`;

function makeRadarUrl(time: number | string) {
  return `https://maps.openweathermap.org/maps/2.0/radar/forecast/{z}/{x}/{y}?appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&tm=${time}`;
}

export default function Map() {
  const [time, setTime] = useState(new Date());
  const [url_next_gen, setUrl] = useState(makeRadarUrl(time.getTime()));

  useEffect(() => {
    const incrementer = setInterval(() => {
      setTime((prevTime) => {
        const now = new Date();
        if (prevTime.getTime() > now.getTime() + 2 * 60 * 60 * 1000 - 10 * 60 * 1000) {
          return now;
        } else {
          return new Date(prevTime.getTime() + 10 * 60 * 1000);
        }
      });
    }, 1000);

    return () => {
      clearInterval(incrementer);
    };
  }, []);

  useEffect(() => {
    console.log(time.getTime());
  }, [time]);

  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={locationMuenster}
      zoom={8}
      scrollWheelZoom={false}
      attributionControl={false}
      zoomControl={false}
      dragging={false}
      doubleClickZoom={false}
      boxZoom={false}
      trackResize={false}
      closePopupOnClick={false}
    >
      <Tile url={url_next_gen} />
      <TileLayer url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"} />
      <Marker position={[51.96, 7.628]} />
    </MapContainer>
  );
}

interface helperProps {
  url: string;
}

const TileWrapper = memo(Tile);

function Tile({ url }: helperProps) {
  console.log("Rerendered");
  return <TileLayer url={url} key={url}/>;
}
