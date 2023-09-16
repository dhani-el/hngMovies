import {KeyboardArrowRight, RssFeed} from "@mui/icons-material";
import favPng from "../../../assets/image/Favorite.png";
import "../../styles/component.css"
import imdb from "../../../assets/image/imdb.png"
import rotten from "../../../assets/image/rotten.png"
import axios from "axios";



export default  async function FeaturedMoviesSection(){
    const info  = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=61cd0c8cecd52ead927518a62ef33472")
    const data = await info.data.results.

    console.log(await data);
    return <div id="featuredMoviesDiv">
                    <div id="featuredMoviesHeader">
                        <h2>Featured Movie</h2>
                        <span>
                            <p>See more</p>
                            <KeyboardArrowRight/>
                        </span>
                    </div>
                    <div id="moviesGrid" >
                            { data.map(function(one){
                                console.log("this is the data in one",one);
                                return <MovieCard image={`https://image.tmdb.org/${one.poster_path}`} isTvSeries={false} metaData={{...one}} />
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
                        <span id="imdb"><img src={imdb} alt="imdb logo"/> <p>{metaData.rating}/100</p></span> 
                        <span id="rotten"><img src={rotten} alt="rotten tomato logo"/> <p>{rottenRating}%</p></span> 
                    </div>
                    <div id="genre">
                       <p>{metaData.genre_ids.join(", ")}</p>
                    </div>
            </div>
}