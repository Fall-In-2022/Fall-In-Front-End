import React from 'react';
import { useMap } from 'react-map-gl';
import axios from 'axios';

const NavigationButton = () => {
  const { current: map } = useMap();

  const fetchLocation = async () => {
    // here we should change this string dynamically to whatever the use has typed in input. (hook up state)
    const location = 'Los Angeles';

    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoicmRpYXppcWFpciIsImEiOiJjbDFoZGZ6OXUwbDN3M2NwYjAyeGg2b3gzIn0.lvVKNHWYFC8Irwzf_3PKuQ`
    );

    const [latitude, longitude] = response.data.features[0].center;

    map.flyTo({ center: [latitude, longitude], zoom: 12 });
  };

  return <button onClick={fetchLocation}>Go</button>;
};

export default NavigationButton;
