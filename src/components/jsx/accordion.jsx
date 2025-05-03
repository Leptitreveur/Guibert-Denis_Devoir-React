import PropTypes from "prop-types";
import { useState } from "react";

export function DetailsAccordion({ title, text, id }){
    const [ isOpen, setIsOpen] = useState(false);
    return(
        <div className = "accordion " >
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