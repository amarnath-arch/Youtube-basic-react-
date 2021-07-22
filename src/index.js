import _ from 'lodash';
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/searchbar';
import YTsearch from 'youtube-api-search';
import Videolist from './components/videolist';
import VideoDetail from './components/videodetail';


// API key here
const API_KEY="";




class App extends Component{

    constructor(props){
        super(props);
        this.state={videos:[],selectedVideo:null};
        this.SearchHandler('ethereum');
        
        // this.setState({selectedVideo:this.state.videos[0]});
        // this.videoselectionHandler=this.videoselectionHandler.bind(this);
    }


    SearchHandler(term){
        YTsearch({key:API_KEY,term:term},videos=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
               });
       });
    }


    render(){
        const videoSearch=_.debounce((term)=>{this.SearchHandler(term)},300);
        return(
            <div>
                <SearchBar onSearch={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <Videolist videos={this.state.videos} onVideoSelection={selectedVideo=> this.setState({selectedVideo})} />
            </div>
            
    
        );
    }
}

ReactDom.render(<App />,document.querySelector('.container'));