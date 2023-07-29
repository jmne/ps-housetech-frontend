import React, { useEffect, useRef } from "react";
import L, { Map as LeafletMap, TileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";

const locationMuenster: L.LatLngExpression = [52.1149, 12.0685];
const rain_layer_url = `https://ps-housetech.uni-muenster.de:444/api/precipitation/{z}/{x}/{y}`;
const RAIN_RADAR_REFRESH_MINUTES = 0.5;

export default function Map() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const rainLayerRef = useRef<TileLayer | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) {
      return;
    }

    mapRef.current = L.map(mapContainerRef.current, {
      center: locationMuenster,
      zoom: 8,
      scrollWheelZoom: false,
      attributionControl: false,
      zoomControl: false,
      dragging: false,
      doubleClickZoom: false,
      boxZoom: false,
      trackResize: false,
      closePopupOnClick: false
    });

    rainLayerRef.current = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    ).addTo(mapRef.current);
    L.tileLayer(rain_layer_url).addTo(mapRef.current);
  }, []);

  useEffect(() => {
    const rainRefresher = setInterval(() => {
      if (!mapRef.current || !rainLayerRef.current) return;
      mapRef.current.removeLayer(rainLayerRef.current);
      rainLayerRef.current = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      ).addTo(mapRef.current);
      rainLayerRef.current = L.tileLayer(rain_layer_url).addTo(mapRef.current);
    }, RAIN_RADAR_REFRESH_MINUTES * 1000 * 60);

    return () => {
      clearInterval(rainRefresher);
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />;
}
