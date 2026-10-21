"use client";

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Head office: 57 Fouad St. (Tariq El Horreya) - Raml Station - Alexandria
const OFFICE_POSITION: [number, number] = [31.1976647, 29.9062268];
const OFFICE_ADDRESS = "57 Fouad St. - Raml Station - Alexandria, Egypt";
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_POSITION.join(
  ","
)}`;

// Brand-colored pin drawn as inline SVG (no external marker images needed)
const officeIcon = L.divIcon({
  className: "",
  html: `<svg width="40" height="52" viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,.35))">
    <path d="M20 0C9 0 0 9 0 20c0 15 20 32 20 32s20-17 20-32C40 9 31 0 20 0z" fill="#000"/>
    <circle cx="20" cy="20" r="9" fill="var(--secondary)"/>
  </svg>`,
  iconSize: [40, 52],
  iconAnchor: [20, 52],
  popupAnchor: [0, -48],
});

export default function Map() {
  return (
    <div className="w-full h-full overflow-hidden relative z-0">
      <MapContainer
        center={OFFICE_POSITION}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={OFFICE_POSITION} icon={officeIcon}>
          <Popup>
            <div className="grid gap-1 text-sm">
              <strong className="text-base text-primary">Al-Fath Head Office</strong>
              <span className="text-gray">{OFFICE_ADDRESS}</span>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold !text-secondary hover:underline"
              >
                Get directions →
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
