import PropTypes from "prop-types";
import { useState } from "react";

//*Start content Services page==================================================================================

export function Presentation({title, description}) {
    return(
        <div className="app_presentationContainer">
            <h1 className="fw-bold">{title}</h1>
            {description && <p>{description}</p>}
            <span className="app_separator" />
        </div>
    )
}

Presentation.propTypes ={
    title : PropTypes.string.isRequired,
    description : PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

// =======================================================================================================

export function SectionTitle({title}) {
    return(
        <div className="app_sectionTitleContainer">
            <h2 className="fw-bold mb-3">{title}</h2>
            <span className="app_title-underline"/>
        </div>
    )
}

SectionTitle.propTypes ={
    title : PropTypes.string.isRequired
}

// =======================================================================================================

export function DetailsAccordion({ title, text, id }){
    const [ isOpen, setIsOpen] = useState(false);
    return(
        <div className = "accordion " id = "legalnotice">
            <div className ="accordion-item ">
                <h2 className="accordion-header ">
                    <button className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                            onClick = {()=> setIsOpen(!isOpen)}
                            type = "button"
                            data-bs-toggle = "collapse"
                            data-bs-target = {`#collapse${id}`}
                            aria-expanded = "true"
                            aria-controls = {`collapse${id}`}
                    >
                        {title}
                    </button>
                </h2>
                <div    id = {`collapse${id}`} 
                        className={`accordion-collapse collapse ${isOpen ? "show" : "" }`}
                        data-bs-parent ="#legalnotice"
                >
                    <div className="accordion-body">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}
DetailsAccordion.propTypes = {
    title : PropTypes.string.isRequired,
    text : PropTypes.node.isRequired,
    id : PropTypes.string.isRequired
}
