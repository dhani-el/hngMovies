import HeaderComponent from "./components/Header";
import AdImage from "./components/backgroundImage";
import Footer from "./components/footer";

import FeaturedMoviesSection from "./components/featuredMovies";
import imageOne from "../../assets/two.jpg";
import imageTwo from "../../assets/three.jpg";
import imageThree from "../../assets/one.jpg";
import "../styles/index.css"



export default function Home(){
    const dummyMovieMetaData = [{
        country:"USA",
        year:"2019",
        title:"Stranger Things",
        rating:"86",
        genre:["Action","Drama"],
        poster:imageTwo,
        isTvSeries:false,
    },
    {
        country:"USA",
        year:"2020",
        title:"Stranger Things 2",
        rating:"97",
        genre:["Action","Drama"],
        poster:imageOne,
        isTvSeries:true,
    },
    {
        country:"USA",
        year:"2021",
        title:"Stranger Things 3",
        rating:"81",
        genre:["Action","Drama"],
        poster:imageThree,
        isTvSeries:false,
    },{
        country:"USA",
        year:"2019",
        title:"Stranger Things",
        rating:"86",
        genre:["Action","Drama"],
        poster:imageTwo,
        isTvSeries:false,
    },{
        country:"USA",
        year:"2019",
        title:"Stranger Things",
        rating:"86",
        genre:["Action","Drama"],
        poster:imageOne,
        isTvSeries:false,
    },]
    return <div id="homeComponentDiv">
                <HeaderComponent/>
                <AdImage/>
                {/* <FeaturedMoviesSection movieData={dummyMovieMetaData} />
                <Footer/> */}
            </div>
}