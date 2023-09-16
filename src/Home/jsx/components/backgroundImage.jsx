import { Button } from "@mui/material";
import PaginationComponent from "./pagination";
import TestImage from "../../../assets/image/testimage.jpg";
import {PlayCircle} from "@mui/icons-material";
import imdb from "../../../assets/image/imdb.png"
import rotten from "../../../assets/image/rotten.png"
import { useEffect } from "react";


export default function AdImage({data}){

    useEffect(function(){
    console.log("this is data",data);
    },[])
    return <div id="adImageDiv" >
                <img src={`http://image.tmdb.org/t/p/original/${data[0].backdrop_path}`} />
                <div id="imageBlur"></div>
                <PaginationComponent/>
                <OverlappingTextComponent details={data[0]} />
            </div>
}

function OverlappingTextComponent({details}){
    return <div id="overlappingTextDiv">
        <h2>{details.title}</h2>

        <div id="ratingsDiv">
            <span><img src={imdb} alt="imdb logo" /><p>{details.vote_average}</p></span>
            <span><img src={rotten} alt="rotten tomato logo" /><p>{details.vote_count}</p></span>
        </div>

        <div>
            <p>{details.overview}</p>
        </div>

        <Button variant="contained" ><a href={details.video} > <PlayCircle/> WATCH TRAILER</a></Button>
    </div>
}