import React, { Component } from 'react'
// import { movies } from './Getmovies'
import axios from 'axios';
export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            para:[1],
            currpage:1,
            movies:[],
            favourites:[],
        }
    }

    async componentDidMount(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
        let data=res.data;
        this.setState({
            movies:[...data.results]
        })
    }
    changeMovies=async()=>{
        console.log("changeMovie")
        console.log(this.state.currpage)
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currpage}`);
        let data=res.data;
        this.setState({
            movies:[...data.results]
        })
    }
    handleRight=()=>{
        console.log("this.handleRight")
        let temp=[]
        for(let i=1;i<this.state.para.length+2;i++){
            temp.push(i);
        }
        this.setState({
            para:[...temp],
            currpage:this.state.currpage+1
        },this.changeMovies)
    }
    handleleft=()=>{
        if(this.state.currpage!==1){
            this.setState({
                currpage:this.state.currpage-1
            },this.changeMovies)
        }
    }
    handleClick=(paraobj)=>{
        if(this.state.currpage!==paraobj){
            this.setState({
                currpage:paraobj
            },this.changeMovies)
        }
    }
    handleFavourites=(movie)=>{
        let olddata=(localStorage.getItem('movies' || "[]"))
        if(this.state.favourites.includes(movie.id)){
            olddata = olddata.filter((m)=>m.id!==movie.id)
        }else{
            olddata.push(movie)
        }
        localStorage.setItem
        console.log(olddata);
    }
    render() {
        // let movie = this.state.movies.results
        return (
            <div>
            {
                this.state.movies.length === 0 ?
                    <div NameName="spinner-border text-primary" role="status">
                        <span className="sr-only">Load</span>
                    </div>
                    : <div>
                        <h1 className='trending'>Trending</h1>
                        <div className='movi-list'>
                            {
                                this.state.movies.map((movieobj) => (
                                    <div className="card movie-card" key={movieobj.id}>
                                        <img src={`https://image.tmdb.org/t/p/original${movieobj.backdrop_path}`} alt={movieobj.title} className="card-img1" />
                                        <h5 className="card-title card1-title">{movieobj.title}</h5>
                                        <a style={{ textDecoration: 'none'}} className="btn-primary btn-wrapper sci" onClick={this.handleFavourites}>Add to Favourites</a>
                                    </div>
                                ))
                            }
                            <div className="page">
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" onClick={this.handleleft}>Previous</a>
                                        </li>
                                        {
                                        this.state.para.map((paraobj)=>(
                                            <li className="page-item" aria-current="page" key={paraobj.length+1}>
                                            <a className="page-link" onClick={()=>this.handleClick(paraobj)}>{paraobj}</a>
                                             </li>
                                        ))
                                    }
                                    <li className="page-item">
                                            <a className="page-link" onClick={this.handleRight}>Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
            }
            </div>
        )
    }
}
