import Herobg from "../../assets/images/hero-bg.jpg"
import Jhondoeabout from "../../assets/images/john-doe-about.jpg"

export function Herobground(){
    return(
        <img src ={Herobg} alt="Jhon Doe working" />
    )
}
export default function Jdabout(){
    return (
        <img src={Jhondoeabout} alt="About jhon Doe" className="img-about"/>
    )
}

