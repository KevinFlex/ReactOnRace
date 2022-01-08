import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mapicon from '../assets/mapicon.jpg'
import L from "leaflet";



function LocationMarker(props) {


  const placeholder = [ 40.00, -105.25 ]

  const mapicon = new L.Icon({
    iconUrl: mapicon,
    iconRetinaUrl: mapicon,
    iconSize: [60, 55],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
})
  return (
    <MapContainer center={placeholder} zoom={12} scrollWheelZoom={false} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {props.riders.map((rider, index) => {
        return (
          <Marker key={index} position={rider.position} mapicon={mapicon}>
            <Popup name={rider.lastName}></Popup>
          </Marker>
        )
      })}
    </MapContainer>
)

}


export default LocationMarker;