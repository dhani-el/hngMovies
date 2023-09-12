import { Button } from "@mui/material";
import TestImage from "../../../assets/image/testimage.jpg";


export default function AdImage(){
    const dummyData = {
        movieTitle:"John Wick 3 : Parabellum",
        imdbLogo:"",
        rottenTomato:"",
        imdbRating:"86.0/100",
        rottenRating:"97%",
        description:"lorem bla bla bla oya sumi in audible aduke wetin happen e for jiggy  e for sweet tea e for sweet tea my body pour me water make we pass by ",
        trailerLink:"https://www.google.com",
    }
    return <div id="adImageDiv" >
                <OverlappingTextComponent details={dummyData} />
                <div id="imageBlur"></div>
                <img src={TestImage} />
            </div>
}

function OverlappingTextComponent({details}){
    return <div id="overlappingTextDiv">
        <h2>{details.movieTitle}</h2>

        <div id="ratingsDiv">
            <span><img src={details.imdbLogo} alt="imdb logo" /><p>{details.imdbRating}</p></span>
            <span><img src={details.rottenTomato} alt="imdb logo" /><p>{details.rottenRating}</p></span>
        </div>

        <div>
            <p>{details.description}</p>
        </div>

        <Button variant="contained" ><a href={details.trailerLink} > WATCH TRAILER</a></Button>
    </div>
}