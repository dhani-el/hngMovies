import HeaderComponent from "./components/Header";
import AdImage from "./components/backgroundImage";
import Footer from "./components/footer";
import "../styles/index.css"



export default function Home(){
    return <div id="homeComponentDiv">
                <HeaderComponent/>
                <AdImage/>
                <Footer/>
            </div>
}