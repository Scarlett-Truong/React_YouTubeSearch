import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_key = 'AIzaSyATBSDrWnUSdlQmAUcpxEB2X_IwX_4aKcA';


class App extends Component{
    constructor(props){
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null, 
        };

        this.videoSearch('surfboards');
        /*
        YTSearch({ key:API_key, term: ''}, (videos) => {
            // this.setState({ videos }); //key and dataVideo has same name 
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0],
            }); 
        });
        */
    }

    videoSearch(term){
        YTSearch({ key:API_key, term: term}, (videos) => {
            // this.setState({ videos }); //key and dataVideo has same name 
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0],
            }); 
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchChange={ term => {this.videoSearch(term)}}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videosPropOfVideoList={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector(".container"));