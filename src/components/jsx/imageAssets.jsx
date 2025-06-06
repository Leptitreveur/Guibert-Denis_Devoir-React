import Aboutbg from "images/john-doe-about.jpg"
import Herobg from "images/hero-bg.jpg"
import Bannerbg from "images/banner.jpg"

// ======================================================================================

export default function AboutBg(){
    return(
        <img src ={Aboutbg} alt="About Jhon Doe" className="app_image-about" />
    )
}

export function HeroBg(){
    return(
        <img src={Herobg} alt="Hero background" className="app_image-hero" />
    )
}

export function BannerBg() {
    return(
        <img src={Bannerbg} alt="Banner background" className="app_image-banner"/>
    )
}


