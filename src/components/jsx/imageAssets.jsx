import Aboutbg from "images/john-doe-about.jpg"
import Herobg from "images/hero-bg.jpg"
import Bannerbg from "images/banner.jpg"

// ======================================================================================

export default function BgAbout(){
    return(
        <img src ={Aboutbg} alt="About Jhon Doe" className="app-image__about" />
    )
}

export function BgHero(){
    return(
        <img src={Herobg} alt="Hero background" className="app-image__hero" />
    )
}

export function BgBanner() {
    return(
        <img src={Bannerbg} alt="Banner background" className="app-image__banner"/>
    )
}


