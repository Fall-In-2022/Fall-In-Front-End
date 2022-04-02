import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
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
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      >
        <NavigationButton />
      </ReactMapGL>
    </div>
  );
};

export default Map;
