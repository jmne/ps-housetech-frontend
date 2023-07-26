import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const locationMuenster: LatLngTuple = [51.96, 7.628];
const rain_layer_url = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}`;

export default function Map() {
  return (
      <MapContainer
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
        <TileLayer url={rain_layer_url} updateInterval={10} />
        <TileLayer url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        <Marker position={[51.96, 7.628]} />
      </MapContainer>
  );
}
