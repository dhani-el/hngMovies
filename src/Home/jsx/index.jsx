import { useState, useEffect } from "react";
import HeaderComponent from "./components/Header";
import AdImage from "./components/backgroundImage";
import Footer from "./components/footer";
import axios from "axios";

import FeaturedMoviesSection from "./components/featuredMovies";
import "../styles/index.css"




export default function Home(){
    const [movieData, setMovieData] = useState([])

   useEffect(function(){
        const data = axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=61cd0c8cecd52ead927518a62ef33472")
        .then(info=>{console.log(info.data.results); setMovieData(info.data.results.slice(0,10))});
    },[]);

    return <div>
         {movieData.length >0 &&  <div id="homeComponentDiv">
        <HeaderComponent/>
        <AdImage data={movieData}/>
        <FeaturedMoviesSection movieData={movieData} />
        <Footer/>
        </div>}
        {movieData.length <= 0 &&  <div > ...page loading</div>}
        </div>
}