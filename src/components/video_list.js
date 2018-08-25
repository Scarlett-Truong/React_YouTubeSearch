import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videosPropOfVideoList.map((videoData) => {
        return (
            <VideoListItem onVideoSelect={props.onVideoSelect} key ={videoData.etag} videoItem = {videoData}/>
        ); 
    });
    
    return (
        <ul className="list-group col-md-4">{videoItems}</ul>
    );
}

export default VideoList;