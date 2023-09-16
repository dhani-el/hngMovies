import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {KeyboardArrowRight} from "@mui/icons-material";
import favPng from "../../../assets/image/Favorite.png";
import "../../styles/component.css"
import imdb from "../../../assets/image/imdb.png"
import rotten from "../../../assets/image/rotten.png"



export default function FeaturedMoviesSection({movieData}){

    return <div id="featuredMoviesDiv">
                    <div id="featuredMoviesHeader">
                        <h2>Featured Movie</h2>
                        <span>
                            <p>See more</p>
                            <KeyboardArrowRight/>
                        </span>
                    </div>
                    <div id="moviesGrid" >
                        {movieData.map(function(oneMovie){
                            return  <Link to = {`/movies/${oneMovie.id}`} > 
                                         <MovieCard image={`http://image.tmdb.org/t/p/w500/${oneMovie.poster_path}` }isTvSeries={oneMovie.isTvSeries} metaData={oneMovie} />
                                    </Link>
                        })}
                    </div>
            </div>
}

function MovieCard({image, isTvSeries, metaData}){
    return <div id="singleMovie" data-testid = "movie-card" >
                <MovieImageComponent image={image} isTvSeries={isTvSeries}/>
                <MovieMetaData metaData={metaData}/>
            </div>
}

function MovieImageComponent({image, isTvSeries}){
    return <div id="imageContainerDiv" >
                <img src={image} data-testid = "movie-poster"/>
                <span id="favouriteSpan"><img src={favPng} /></span>
                {isTvSeries &&<span id="tvSeriesSpan"><p>TV SERIES</p></span>}
            </div>
}

function MovieMetaData({metaData}){
    const rottenRating = Math.floor(Math.random() * 100);
    return <div id="metaDataDiv">
                    <div id="countryAndYear"><p>USA, </p><p data-testid = "movie-release-date"> {metaData.release_date}</p></div>
                    <p id="title" data-testid = "movie-title"  >{metaData.original_title}</p>
                    <div id="ratings">
                        <span id="imdb"><img src={imdb} alt="imdb logo"/> <p>{metaData.vote_average}</p></span> 
                        <span id="rotten"><img src={rotten} alt="rotten tomato logo"/> <p>{rottenRating}%</p></span> 
                    </div>
                    <div id="genre">
                       <p>Action , Drama</p>
                    </div>
            </div>
}