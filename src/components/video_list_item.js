import React from 'react';

const VideoListItem = ({videoItem}) => {
    // console.log(videoItem);
    const imgUrl = videoItem.snippet.thumbnails.default.url; 
    return(
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{videoItem.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;