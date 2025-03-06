import PropTypes from "prop-types";

import { BrushIcon, CodeIcon, ResearchIcon } from "./images";
import { Desgintext, Devwebtext, Reftext } from "./text";

export function Design ({title}) {
    return(
        <div className="">
            <BrushIcon/>
            <h2 className="Service-type">{title}</h2>
            <Desgintext/>
        </div>
    )
}

Design.propTypes = {
    title : PropTypes.string.isRequired,
}

export function Developpement ({title}) {
    return(
        <div className="">
            <CodeIcon/>
            <h2 className="Service-type">{title}</h2>
            <Devwebtext/>
        </div>
    )
}

Developpement.propTypes = {
    title : PropTypes.string.isRequired,
}

export function Referencement ({title}) {
    return(
        <div className="">
            <ResearchIcon/>
            <h2 className="Service-type">{title}</h2>
            <Reftext/>
        </div>
    )
}

Referencement.propTypes = {
    title : PropTypes.string.isRequired,
}