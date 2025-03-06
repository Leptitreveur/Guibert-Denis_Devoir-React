<<<<<<< HEAD
import Jhondoe from "../../assets/images/john-doe-about.jpg"
import Brush from "../../assets/icons-svg/brush.svg"
import Code from "../../assets/icons-svg/code.svg"
import Research from "../../assets/icons-svg/research.svg"
=======
import Herobg from "../../assets/images/hero-bg.jpg"
import Jhondoeabout from "../../assets/images/john-doe-about.jpg"
>>>>>>> 044f5931989a785ad5ed7be19db4face867f8bb0

export function Herobground(){
    return(
        <img src ={Herobg} alt="Jhon Doe working" />
    )
}
<<<<<<< HEAD

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
=======
export default function Jdabout(){
    return (
        <img src={Jhondoeabout} alt="About jhon Doe" className="img-about"/>
    )
}

>>>>>>> 044f5931989a785ad5ed7be19db4face867f8bb0
