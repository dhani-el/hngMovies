import {TextField} from "@mui/material";
import "../../styles/component.css";
import logoSvg from "../../../assets/image/tv.png"
import menuSvg from "../../../assets/image/menu.png"

export default function HeaderComponent(){
    return <div id="headerComponentDiv">
                <LogoAndNameComponent/>
                <SearchComponent/>
                <SignInAndMenuComponent/>
            </div>
}


function LogoAndNameComponent(){
    return <div id="logoAndNameDiv">
                <span id="tvContainer">
                    <img src={logoSvg} alt="MovieBox logo" />
                </span>
                <p>MovieBox</p>
            </div>
}

function SearchComponent(){
    return <TextField variant="outlined" placeholder="What do you want to watch?" type="text"  sx={{width:"30%"}} id="searchComponent" />
}

function SignInAndMenuComponent(){
    return <div id="SignInAndMenuComponentDiv">
                <SignInComponent/>
                <MenuHamburgerComponent/>
            </div>
}

function SignInComponent(){
    return <p>Sign in</p>
}

function MenuHamburgerComponent(){
    return <div id="hamburgerContainer"><img src={menuSvg} /></div>
}