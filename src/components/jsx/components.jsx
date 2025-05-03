import PropTypes from "prop-types";

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
            <h2 className="fw-bold">{title}</h2>
            <span className="app_title-underline"/>
        </div>
    )
}

SectionTitle.propTypes ={
    title : PropTypes.string.isRequired
}

// =======================================================================================================