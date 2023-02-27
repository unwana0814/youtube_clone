import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from './utils/constant';

console.log(channelId);

const VideoCard = ({ video: {id: {
  videoId }, snippet} }) => {

  return (
    <Card sx={{width: {md: "320px", xs: '100px'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{width: 358, height: 180}}
        />
      </Link>
      <CardContent sx={{backgroudColor: '#1e1e1e', height: '10px'}} />
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography style={{color: "black", textDecoration: 'none'}} mx = '5px'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant ="subtitle2"
        fontWeight="bold" color="gray" mx= '5px' >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
        </Typography>
      </Link>
    </Card>
  )
}

export default VideoCard