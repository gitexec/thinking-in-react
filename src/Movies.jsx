import React, {Component} from 'react';
import axios from 'axios';

export default class Movies extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    axios.get(`http://www.omdbapi.com/?s=star+wars`)
      .then(response => {
        const movies = response.data.Search.map(
        (movie) => {
          return {
            imdbID: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster
                 };
        });
        console.log(response.data.Search);
        this.setState({movies});
      });
  }

  render() {
    let data = "Sorry no result";
    if(this.state.movies.length > 0){
      data = this.state.movies.map(m => (
      <div key={m.imdbID}>
        <h4>{m.title}</h4>
        <img src={m.poster} alt={m.title} />
      </div>
     ));
    }
    return(
      <div>
        {data}
      </div>
    )
  }
}
