"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({
  setSelectedCoordinates,
  latlng,
}: {
  setSelectedCoordinates: any;
  latlng: [number, number];
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setSelectedCoordinates([lat, lng]);
  };
  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView(latlng, 30);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
      mapRef.current.on("click", handleMapClick);
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default MapComponent;
