import "./styles/index.css"



export default function SingleMovie(){
    return <div id="singelMovieDiv">
                <LeftSection/>
                <MainSection/>
            </div>
}

function LeftSection(){
    return <div id="leftSection"></div>
}

function MainSection(){
    return <div id="mainSection"></div>
}