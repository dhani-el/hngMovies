import HeaderComponent from "./components/Header";
import AdImage from "./components/backgroundImage";
import "../styles/index.css"



export default function Home(){
    return <div id="homeComponentDiv">
                <HeaderComponent/>
                <AdImage/>
            </div>
}