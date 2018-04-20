import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyDj2SgFH597jx26DDo4SZY0IRyTHONutH0';

class App extends Component{

constructor(props){
  super(props);

  this.state = {
    videos: [],
    selectedVideo: null
  };
  this.videoSearch('Akshay Kumar');
}


videoSearch(term){

  YTSearch ({key:API_KEY,term:term},(videos) => {
  this.setState({
    videos: videos,
    selectedVideo: videos[0]
   });
  //this.setState({ videos : videos }); only if key and values name are same (ES6 syntax)
  });
}

  render(){
    return (
  <div>
  <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
  <VideoDetail video = {this.state.selectedVideo} />
  <VideoList
   onVideoSelected={selectedVideo => this.setState({selectedVideo})}
   videos = {this.state.videos} />
  </div>
   );
 }
}
ReactDOM.render(<App />, document.querySelector('.container'));
