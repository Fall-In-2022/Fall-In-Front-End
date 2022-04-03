import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import NavigationButton from '../NavigationButton/NavigationButton';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.45466,
    longitude: 30.5238,
    zoom: 10,
    attributionControl: false,
  });

  return (
    <div>
      <ReactMapGL
        initialViewState={viewport}
        style={{ width: '100vw', height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoicmRpYXppcWFpciIsImEiOiJjbDFoZGZ6OXUwbDN3M2NwYjAyeGg2b3gzIn0.lvVKNHWYFC8Irwzf_3PKuQ"
      >
        <NavigationButton />
        <GeolocateControl position="bottom-left" />
      </ReactMapGL>
    </div>
  );
};

export default Map;
