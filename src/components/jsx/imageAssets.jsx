import Aboutbg from "images/john-doe-about.jpg"
import Herobg from "images/hero-bg.jpg"
import Bannerbg from "images/banner.jpg"

import Coder from "portfolio/coder.jpg";
import EspaceBienEtre from "portfolio/espace-bien-etre.jpg";
import FreshFood from "portfolio/fresh-food.jpg";
import JapaneseRestaurant from "portfolio/restaurant-japonais.jpg";
import Screens from "portfolio/screens.jpg";
import Seo from "portfolio/seo.jpg";

//* ======================================================================================

export function BgAbout(){
    return(
        <img src ={ Aboutbg } alt="About Jhon Doe" className="app-image__about" />
    )
}

export function BgHero(){
    return(
        <img src={ Herobg } alt="Hero background" className="app-image__hero" />
    )
}

export function BgBanner() {
    return(
        <img src={ Bannerbg } alt="Banner background" className="app-image__banner"/>
    )
}

//* ======================================================================================

const PortfolioImages = {
    coder: Coder,
    wellbeing: EspaceBienEtre,
    freshfood: FreshFood,
    japrest: JapaneseRestaurant,
    screens: Screens,
    seo: Seo,
};

export default PortfolioImages;