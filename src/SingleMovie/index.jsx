import { LeftSection, MainSection } from "./jsx/component"
import { useState,useEffect } from "react";
import axios from "axios";
import "./styles/index.css"



export default function SingleMovie(){
    const [movieData, setMovieData] = useState([])
    const id = 1002185
   useEffect(function(){
        const data = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=61cd0c8cecd52ead927518a62ef33472&append_to_response=recommendations`)
        .then(info=>{console.log(info.data); setMovieData(info.data)});
    },[]);
    return <div id="singelMovieDiv">
                <LeftSection/>
                <MainSection/>
            </div>
}



