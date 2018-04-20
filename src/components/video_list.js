import React from 'react';
import VideoListItem from './video_list_item'
const VideoList = (props) => {

const videoItems = props.videos.map((video)=>{
  return (
    <VideoListItem
     onVideoSelected={props.onVideoSelected}
     key={video.etag}
     video={video} />
  )
});

  return (
    <div className="h4">
    <ul className="col-md-8 list-group">
    {videoItems}
    </ul>
    </div>
  );
};

export default VideoList;
