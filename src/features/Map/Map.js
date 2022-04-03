import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import NavigationButton from '../NavigationButton/NavigationButton';
import CardService from '../../services/cardService';
import TweetNews from '../../features/TweetNews/TweetNews';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.45466,
    longitude: 30.5238,
    zoom: 9,
    attributionControl: false,
  });

  const [data, setData] = useState(null);

  //we should include setData inside fetch operation when we get the apiHost
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
    const cardData = CardService.formatLocationData(e);
    setData(cardData);
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
        mapboxAccessToken="pk.eyJ1IjoicmRpYXppcWFpciIsImEiOiJjbDFoZGZ6OXUwbDN3M2NwYjAyeGg2b3gzIn0.lvVKNHWYFC8Irwzf_3PKuQ"
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
      {data && <TweetNews style={{ width: '100vw' }} reportData={data} />}
    </div>
  );
};

export default Map;
