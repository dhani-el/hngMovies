import {KeyboardArrowRight} from "@mui/icons-material";
import favPng from "../../../assets/image/Favorite.png";



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
                            return <MovieCard image={oneMovie.poster} isTvSeries={oneMovie.isTvSeries} metaData={oneMovie} />
                        })}
                    </div>
            </div>
}
function MovieCard({image, isTvSeries, metaData}){
    return <div id="singleMovie">
                <MovieImageComponent image={image} isTvSeries={isTvSeries}/>
                <MovieMetaData metaData={metaData}/>
            </div>
}
function MovieImageComponent({image, isTvSeries}){
    return <div id="imageContainerDiv">
                <img src={image}/>
                <span id="favouriteSpan"><img src={favPng} /></span>
                {isTvSeries &&<span id="tvSeriesSpan"><p>TV SERIES</p></span>}
            </div>
}
function MovieMetaData({metaData}){
    const rottenRating = Math.floor(Math.random() * 100);
    return <div id="metaDataDiv">
                    <div id="countryAndYear"><p>{metaData.country}, {metaData.year}</p></div>
                    <p id="title">{metaData.title}</p>
                    <div id="ratings">
                        <span id="imdb"><img/> <p>{metaData.rating}/100</p></span> 
                        <span id="rotten"><img/> <p>{rottenRating}%</p></span> 
                    </div>
                    <div id="genre">
                       <p>{metaData.genre.join(", ")}</p>
                    </div>
            </div>
}