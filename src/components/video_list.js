import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videosPropOfVideoList.map((videoData) => {
        return <VideoListItem key ={videoData.etag} videoItem = {videoData}/>
        
    });
    
    return (
        <ul className="list-group">{videoItems}</ul>
    );
}

export default VideoList;