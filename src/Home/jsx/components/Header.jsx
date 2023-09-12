import {TextField} from "@mui/material";
import "../../styles/component.css";
import logoImage from "../../../assets/image/tv.png"

export default function HeaderComponent(){
    return <div id="headerComponentDiv">
                <LogoAndNameComponent/>
                <SearchComponent/>
                <SignInAndMenuComponent/>
            </div>
}


function LogoAndNameComponent(){
    return <div id="logoAndNameDiv">
                <span>
                    <img src={logoImage} alt="MovieBox logo" />
                </span>
                <p>MovieBox</p>
            </div>
}

function SearchComponent(){
    return <TextField variant="outlined" placeholder="What do you want to watch?" type="search"  sx={{width:"30%"}} />
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
    return <div>menu</div>
}