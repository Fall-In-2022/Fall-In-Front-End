import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import NavigationButton from '../NavigationButton/NavigationButton';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.45466,
    longitude: 30.5238,
    zoom: 9,
    attributionControl: false,
  });

  const getLocation = (e) => {
    let apiHost = process.env.NEXT_PUBLIC_SCRAPPY_DEV_HOST,
      lat = e.viewState.latitude,
      long = e.viewState.longitude;
    fetch(`${apiHost}/api/ukraineWebScraper?lat=${lat}&long=${long}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    console.log('getLocation', e.viewState.latitude, e.viewState.longitude);
  };

  const bounds = [
    [20.818738, 44.91581], // Southwest coordinates
    [42.27837, 53.422333], // Northeast coordinates
  ];

  return (
    <div>
      <ReactMapGL
        initialViewState={viewport}
        style={{ width: '100vw', height: 700 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
        onDragEnd={getLocation}
        maxBounds={bounds}
      >
        <NavigationButton />
        <GeolocateControl style={{ marginRight: '30px' }} />
        <NavigationControl
          position="bottom-right"
          style={{ marginRight: '30px' }}
          showCompass={true}
        />
      </ReactMapGL>
    </div>
  );
};

export default Map;
