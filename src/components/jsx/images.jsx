// From images
// ======================================================================================

import Jdabout from "../../assets/images/john-doe-about.jpg"
import Herobg from "../../assets/images/hero-bg.jpg"
import Banner from "../../assets/images/banner.jpg"

// ======================================================================================

export default function About(){
    return(
        <img src ={Jdabout} alt="About jhon doe" />
    )
}

export function Herobground(){
    return(
        <img src={Herobg} alt="Hero background" />
    )
}

export function Bannerbg() {
    return(
        <img src={Banner} alt="Banner background" className="banner"/>
    )
}


