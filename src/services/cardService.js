import Axios from 'axios';

let baseUrl = `http://localhost:8084/api/ukraineWebScraper?`;
let sampleData = [
  {
    title: 'Russians kill several women, try to burn their bodies near Kyiv',
    link: 'https://www.ukrinform.net/rubric-ato/3447075-russians-kill-several-women-try-to-burn-their-bodies-near-kyiv.html',
    time: '2022-04-03T00:52:00+03:00',
    image:
      'https://static.ukrinform.com/photos/2022_03/thumb_files/360_240_1646927087-789.jpg',
    has_location: true,
    latitude: '50.450000',
    longitude: '30.523600',
  },
  {
    title:
      'Village head and her relatives abducted by Russian invaders found dead in Kyiv Region',
    link: 'https://www.ukrinform.net/rubric-ato/3447069-village-head-and-her-relatives-abducted-by-russian-invaders-found-dead-in-kyiv-region.html',
    time: '2022-04-03T00:07:02+03:00',
    image:
      'https://static.ukrinform.com/photos/2022_04/thumb_files/360_240_1648931994-238.jpg',
    has_location: true,
    latitude: '50.450000',
    longitude: '30.523600',
  },
  {
    title: 'More than 600 explosive items seized in Irpin',
    link: 'https://www.ukrinform.net/rubric-ato/3446994-more-than-600-explosive-items-seized-in-irpin.html',
    time: '2022-04-02T22:05:06+03:00',
    image:
      'https://static.ukrinform.com/photos/2022_04/thumb_files/360_240_1648924651-139.jpg',
    has_location: true,
    latitude: '50.516700',
    longitude: '30.250000',
  },
  {
    title: 'Kyiv region liberated from Russian invaders - Defense Ministry',
    link: 'https://www.ukrinform.net/rubric-ato/3446926-kyiv-region-liberated-from-russian-invaders-defense-ministry.html',
    time: '2022-04-02T20:52:00+03:00',
    image:
      'https://static.ukrinform.com/photos/2022_03/thumb_files/360_240_1648629925-771.jpg',
    has_location: true,
    latitude: '50.450000',
    longitude: '30.523600',
  },
  {
    title: "Pope's visit to Kyiv can influence course of events - Yermak",
    link: 'https://www.ukrinform.net/rubric-ato/3446903-popes-visit-to-kyiv-can-influence-course-of-events-yermak.html',
    time: '2022-04-02T20:35:00+03:00',
    image:
      'https://static.ukrinform.com/photos/2022_03/thumb_files/360_240_1648101865-782.jpeg',
    has_location: true,
    latitude: '50.450000',
    longitude: '30.523600',
  },
  {
    title:
      'Ukrainian forces regain control of over 30 settlements in Kyiv region',
    link: 'https://www.ukrinform.net/rubric-ato/3446866-ukrainian-forces-regain-control-of-over-30-settlements-in-kyiv-region.html',
    time: '2022-04-02T19:55:00+03:00',
    image:
      'https://static.ukrinform.com/photos/2022_02/thumb_files/360_240_1646045618-407.jpg',
    has_location: true,
    latitude: '50.450000',
    longitude: '30.523600',
  },
];

class CardService {
  static formatLocationData(data) {
    const lat = data.viewState.latitude;
    const long = data.viewState.longitude;

    const config = {
      method: 'GET',
      // url: baseUrl + `lat=${lat}&long=${long}`,
      url: 'https://catfact.ninja/fact',
      crossdomain: true,
    };

    return sampleData;
  }
}

export default CardService;
