import PropTypes from "prop-types";

import { BsBrush, BsSearch, BsCodeSlash } from 'react-icons/bs'
import { Desgintext, Devwebtext, Reftext } from "./text";


export function Design ({title}) {
    return(
        <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2 border border-grey rounded">
            <BsBrush style={{fontSize : '1.6rem', color:'blue'}} className="card-img-top m-4"/>
            <h2 className="card-title fw-bold">{title}</h2>
            <Desgintext/>
        </div>
    )
}

Design.propTypes = {
    title : PropTypes.string.isRequired,
}

export function Developpement ({title}) {
    return(
        <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2 border border-grey rounded">
            <BsCodeSlash style={{fontSize : '1.6rem', color : 'blue'}} className="card-img-top m-4"/>
            <h2 className="card-title fw-bold">{title}</h2>
            <Devwebtext/>
        </div>
    )
}

Developpement.propTypes = {
    title : PropTypes.string.isRequired,
}

export function Referencement ({title}) {
    return(
        <div className="card-body d-flex flex-column justify-content-center align-items-center gap-2 border border-grey rounded">
            <BsSearch style={{fontSize : '1.6rem', color : 'blue'}} className="card-img-top m-4"/>
            <h2 className="card-title fw-bold">{title}</h2>
            <Reftext/>
        </div>
    )
}

Referencement.propTypes = {
    title : PropTypes.string.isRequired,
}

