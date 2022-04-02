import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

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
        {...viewport}
        style={{ width: '100vw', height: 600 }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      ></ReactMapGL>
    </div>
  );
};

export default Map;
