import { Facebook,Instagram,Twitter,YouTube, CopyrightRounded } from "@mui/icons-material"


export default function Footer(){
    return <div id="footerDiv">
                <div id="socialIconsDiv">
                    <Facebook/>
                    <Instagram/>
                    <Twitter/>
                    <YouTube/>
                </div>
                <div id="legalDiv">
                    <p>Condition of Use</p>
                    <p>Privacy & Policy</p>
                    <p>Press Room</p>
                </div>
                <div id="copyrightDiv">
                <CopyrightRounded/><p>2021 MovieBox by Adriana Eka Prayudha</p>
                </div>
            </div>
}