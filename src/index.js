import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_key = 'AIzaSyATBSDrWnUSdlQmAUcpxEB2X_IwX_4aKcA';


class App extends Component{
    constructor(props){
        super(props);
        
        this.state = { videos: [] };

        YTSearch({ key:API_key, term: ''}, (videos) => {
            this.setState({ videos }); //key and dataVideo has same name 
            //this.setState({ videos: videosVideo }); 
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videosPropOfVideoList={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.querySelector(".container"));