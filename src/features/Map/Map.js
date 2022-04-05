import React, { useState, useEffect } from 'react';
import ReactMapGL, {
  GeolocateControl,
  NavigationControl,
  Marker,
} from 'react-map-gl';
import NavigationButton from '../NavigationButton/NavigationButton';
import CardService from '../../services/cardService';
import TweetNews from '../../features/TweetNews/TweetNews';
import axios from 'axios';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 50.45466,
    longitude: 30.5238,
    zoom: 9,
    attributionControl: false,
  });

  const [data, setData] = useState(null);
  const [markersArray, setMarkersArray] = useState([]);

  //we should include setData inside fetch operation when we get the apiHost
  const getLocation = (e) => {
    let apiHost = `https://scrappy-dev-backend.loadbalancer.tk/api/ukraineWebScraper?`,
      lat = e.viewState.latitude,
      long = e.viewState.longitude;
    fetch(`${apiHost}lat=${lat}&long=${long}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const bounds = [
    [20.818738, 44.91581], // Southwest coordinates
    [42.27837, 53.422333], // Northeast coordinates
  ];

  const renderedMarkers = markersArray.map((cur) => {
    return (
      <Marker
        latitude={cur.city_info.latitude}
        longitude={cur.city_info.longitude}
      >
        <img
          src="https://clipground.com/images/map-pin-png-8.png"
          anchor="bottom"
          style={{ width: '18px', color: 'blue' }}
        />
      </Marker>
    );
  });

  const onMapDrag = (e) => {
    getLocation(e);
    fetchTweets(e);
  };

  const fetchTweets = async (e) => {
    let lat = e.viewState.latitude;
    let long = e.viewState.longitude;
    let response = await axios.get(
      `https://scrappy-dev-backend.loadbalancer.tk/api/ukraineWebScraper/tweets?lat=${lat}&long=${long}`
    );

    let filteredArray = response.data.filter(
      (cur) => cur.tweets.statuses.length
    );

    console.log(filteredArray);

    setMarkersArray(filteredArray);
  };

  return (
    <div>
      <ReactMapGL
        initialViewState={viewport}
        style={{ width: '100vw', height: 700 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoicmRpYXppcWFpciIsImEiOiJjbDFoZGZ6OXUwbDN3M2NwYjAyeGg2b3gzIn0.lvVKNHWYFC8Irwzf_3PKuQ"
        onDragEnd={onMapDrag}
        maxBounds={bounds}
      >
        <NavigationButton />
        <GeolocateControl style={{ marginRight: '30px' }} />
        <NavigationControl
          position="bottom-right"
          style={{ marginRight: '30px' }}
          showCompass={true}
        />
        {renderedMarkers}
      </ReactMapGL>
      {data && (
        <React.Fragment>
          <TweetNews style={{ width: '100vw' }} reportData={data} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Map;
