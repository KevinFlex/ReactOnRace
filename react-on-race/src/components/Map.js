import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



function LocationMarker() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const placeholder = [40.00, -105.25]


  useEffect(() => {
    fetch(`http://localhost:3000/rider_lists`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })

      .then(data => {

        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  if (loading) return "Loading...";
  if (error) return "Error!";
  if (data)

    return (
      <MapContainer center={placeholder} zoom={12} scrollWheelZoom={false} style={{ height: "100vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((racer, index) => {
          return (
            <Marker key={index} position={[racer.lat, racer.lng]}>
              <Popup>{racer.firstName} {racer.lastName}</Popup>
            </Marker>
          )
        })}
      </MapContainer>
    )

}


export default LocationMarker;