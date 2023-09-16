import { useRef } from "react";
import { HomeOutlined,MovieOutlined,TvOutlined,CalendarMonthOutlined, Logout,Star, AirplaneTicket, List } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../styles/components.css";
import tv from "../../assets/image/tv.png";


export function LeftSection(){
    return <div id="leftSection">
                    <LeftSectionHeader/>
                    <LeftSectionMenuList/>
                    <LeftSectionModal/>
                    <LeftSectionLogOut/>
            </div>
}

function LeftSectionHeader(){
    return<div id="leftSectionHeader">
                <span id="leftSectionHeaderImageSpan">
                    <img src={tv} alt="movieBOx Logo"/>
                </span>
                <p id="leftSectionHeaderP">MovieBox</p>
            </div>
}

function LeftSectionMenuList(){
    const highRef = useRef(null);

        return <div id="LeftSectionMenuList" ref={highRef} >
                    <MenuItem title="Home" Icon={HomeOutlined} higherRef={highRef} />
                    <MenuItem title="Movies" Icon={MovieOutlined} higherRef={highRef} />
                    <MenuItem title="Tv Series" Icon={TvOutlined} higherRef={highRef} />
                    <MenuItem title="Upcoming" Icon={CalendarMonthOutlined} higherRef={highRef} />
                </div>
}

function  MenuItem({title,Icon,higherRef}){
    const spanRef  = useRef(null);
    function handelClick(){
        if (spanRef == null) {
            return
        }
        [...higherRef.current.children].forEach(function (child) {
            child.classList.remove("clicked")
        })
        // console.log(higherRef);
        console.log(`${title} clicked`);
        spanRef.current.classList.add("clicked");
    }
        return <span id="singleMenuItem" ref={spanRef} onClick={handelClick} >
                    <Icon/><p>{title}</p>
                </span>
}

function LeftSectionModal(){
    return <div id="LeftSectionModal">
                <p id="LeftSectionModalMainP">Play movie quizes and earn free tickets</p>
                <p id="LeftSectionModalMinorP">50k people are playing right now</p>
                <Button id="LeftSectionModalButton" variant="contained" >Start playing</Button>
            </div>
}

function LeftSectionLogOut(){
    return <div id="LeftSectionLogOut"><Logout/> <p>Log out</p></div>
}


export function MainSection({data}){
    const dummyData = {
        title :"Top Gun: Maverick",
        year :"2022",
        rating :"PG-13",
        duration :"2h 10m",
        genre : ["Action","Drama"],
        synopsis : "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite gradutes on a mission that demands the ultimate sacrifice from those chosen to fly it.",
        director:"Jospeh Kosinski",
        writers: ["Jim Cash", "Jack Epps Jr", "Peter Craig"],
        stars: ["Tom Cruise", "Jennifer Connelly", "Miles Teller"],
        topRating:"65",
        extraRating:"8.5",
        reviewers:"350k",
        recomendedImage:["","",""]
    }
    return <div id="mainSection">
                <MainSectionVideo videoSrc={data.video} poster={`http://image.tmdb.org/t/p/original/${data.backdrop_path}`}/>
                <div id="metaDataContainer">
                    <MainSectionMetaData someMetadata={data}/>
                    <MainSectionExtraData extraData={{vote_average:data.vote_average,vote_count:data.vote_count,recomendedImage:dummyData.recomendedImage}}/>
                </div>
            </div>
}

function MainSectionVideo({videoSrc,poster}){
    return <div id="MainSectionVideo"><video controls  poster={poster}> <source src={videoSrc == false ? false:videoSrc}  type="video/mp4"/> </video></div>
}

function MainSectionMetaData({someMetadata}){
    console.log(someMetadata);
    return <div id="MainSectionMetaData">
                <div id="basicData">
                    <p id="title" data-testid = "movie-title">{someMetadata.title}</p>
                    <p id="year" className="dot" data-testid = "movie-release-date">{someMetadata.release_date}</p>
                    <p id="rating" className="dot">PG-13</p>
                    <p id="duration" className="dot" data-testid = "movie-runtime" >{someMetadata.runtime} mins</p>
                    <div id="listOfGenre">{someMetadata.genres.map(function(aGenre){
                           return <span key={aGenre} id="Agenre">{`${aGenre.name} `}</span>
                    })}</div>
                </div>
                <p id="synopsis" data-testid = "movie-overview">{someMetadata.overview}</p>
                <div id="cast" >
                    <div>
                        <p id="directors">Director : </p><p className="value"> {someMetadata.director?someMetadata.director:"N/A"}</p>
                    </div>
                    <div>
                        <p id="writers">Writers : </p><p className="value"> {someMetadata.writers ? Array.from(someMetadata.writers).join(", "):"N/A"}</p>
                    </div>
                    <div>
                        <p id="stars">Stars : </p><p className="value"> {someMetadata.stars ? Array.from(someMetadata.stars).join(", "):"N/A"}</p>
                    </div>
                </div>
                <div id="acheivement">
                    <span>Top rated movie {`#${Math.floor(someMetadata.popularity)}`}</span>
                    <select>
                        <option>Awards 9 nominations</option>

                    </select>
                </div>
            </div>
}

export function MainSectionExtraData({extraData}){
    return <div id="MainSectionExtraData">
                <div id="extraRating">
                    <Star/>
                    <span id ="ratingSpan">
                        <p id="greyText">{extraData.vote_average} </p>
                        <p> | {extraData.vote_count}</p>
                    </span>
                </div>
                <div id="callToActions">
                    <Button variant="contained" id="showtimeButton" ><AirplaneTicket/> See Showtimes</Button>
                    <Button variant="contained" id="watchOptions" ><List/> More Watch Options</Button>
                </div>
                <div id="suggestedShows">
                    {extraData.recomendedImage.map(function(oneImage){
                        return <div className="imageDivs">
                                    <img src={oneImage}/>
                                </div>
                    })}
                    <div id="explanation"><List/><p>The Best Movies and Shows in September</p></div>
                </div>
    </div>
}