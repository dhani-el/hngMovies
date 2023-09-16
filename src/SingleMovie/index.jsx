import { LeftSection, MainSection } from "./jsx/component"
import { useState,useEffect } from "react";
import axios from "axios";
import "./styles/index.css"
import {useParams} from "react-router-dom"



export default function SingleMovie(){

    const [movieData, setMovieData] = useState(null)
    const {id} = useParams()
   useEffect(function(){
        const data = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=61cd0c8cecd52ead927518a62ef33472&append_to_response=recommendations`)
        .then(info=>{console.log(info.data); setMovieData(info.data)});
    },[]);
    return <div id="singelMovieDiv">
                <LeftSection/>
                {movieData == null ?<div>...loading</div>:<MainSection data={movieData} />}
            </div>
}



