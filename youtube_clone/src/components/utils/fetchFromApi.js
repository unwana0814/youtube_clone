import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {
//     q: 'music',
//     part: 'snippet,id',
//     regionCode: 'US',
//     maxResults: '50',
//     order: 'date'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'a8dd0746edmshb7e1f87ee2879aep14de47jsn3aa9eb4bdcee',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

const options = {
  params: {
      q: 'music',
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'a8dd0746edmshb7e1f87ee2879aep14de47jsn3aa9eb4bdcee',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



// export const fetchFromApi = async (endpoint) => {
//   const {data} = await axios.request(options).then(function (response) {
//     console.log(response.data);
//     return data;
//   }).catch(function (error) {
//     console.error(error);
//   });

// }

export const fetchFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options).then(function (response) {
    console.log(response.data);
    return data;
  }).catch(function (error) {
    console.error(error);
  });
}