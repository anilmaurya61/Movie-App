import React, { Component } from 'react'
import { movies } from './Getmovies'

export default class Favorites extends Component {
    render() {
        let movie = movies.results
        let genreids = {
            28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
            27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
        };

        let temp = [];
        movie.forEach((movieObj) => {
            if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
                temp.push(genreids[movieObj.genre_ids[0]]);
            }
        })
        temp.unshift('All Genres');
        this.setState({
            genres: [...temp],
            currgen: 'All Genres',
        })
        return (
            <div>
                <div class="row">
                    <div class="col-2 "style={{margin:'2rem'}}>
                        <ul class="list-group">{
                            temp.map((genreobj) => (
                                 genreobj === 'All Genres' ?
                                    <li class="list-group-item" style={{ color: 'white' , fontWeight:'bold', backgroundColor:'#3f51b5'}}>{genreobj}</li>:
                                    <li class="list-group-item" style={{ color: '#3f51b5' , fontWeight:'bold', backgroundColor:'white'}}>{genreobj}</li>

                            ))
                        }
                        </ul>
                    </div>
                    <div class="col-1"></div>
                    <div class="col" style={{margin:'2rem'}}>
                        <div class="row">
                            <input type="text" aria-label="First name" class="input-group-text col" placeholder='Search'/>
                            <input type="number" aria-label="Last name" class="input-group-text col" placeholder='Row Count'/>
                        </div>
                        <div class="row">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Genre</th>
                                        <th>Popularity</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movie.map((movieobj) => (
                                            <tr>
                                                <th><img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} alt={movieobj.title} className="card-img1" style={{ width: '4rem', height: '5rem' }} />{movieobj.title}</th>
                                                <th>{genreids[movie[0]]}</th>
                                                <th>{movieobj.popularity}</th>
                                                <th>{movieobj.vote_average}</th>
                                                <th><button type="button" class="btn btn-danger" style={{ margin: 'auto' }}>Delete</button></th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
