import React, { useState } from 'react';

import axios from 'axios';

import Feed from './components/Feed.jxs';


const fetchData = () => {

    const [data, setData] = useState([]);

    const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

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

    const fetchFromApi = async (url) => {
        const {data} = await axios.get(`${BASE_URL}/${url}`, options).then(function (response) {
          setData(response.data);
          return data;
        }).catch(function (error) {
          console.error(error);
        });
      }
      console.log(data)
  return (
    <div>
        <Feed data={data} />
    </div>
  )
}

export default fetchData