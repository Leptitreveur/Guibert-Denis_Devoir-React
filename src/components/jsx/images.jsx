import Jdabout from "../../assets/images/john-doe-about.jpg"
import Herobg from "../../assets/images/hero-bg.jpg"

import Brush from "../../assets/icons-svg/brush.svg"
import Code from "../../assets/icons-svg/code.svg"
import Research from "../../assets/icons-svg/research.svg"

export default function About(){
    return(
        <img src ={Jdabout} alt="about jhon doe" />
    )
}

export function Herobground(){
    return(
        <img src={Herobg} alt="Hero background" />
    )
}
export function BrushIcon(){
    return(
        <img src={Brush} alt="Pinceau" width={24}></img>
    )
}

export function CodeIcon(){
    return(
        <img src={Code} alt="Code" width={24}></img>
    )
} 

export function ResearchIcon(){
    return(
        <img src={Research} alt="Recherche" width={24}></img>
    )
}