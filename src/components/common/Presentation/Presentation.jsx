import { PropTypes } from "prop-types";

//* Component showned to present all pages but HomePage and app ================================================================

export function Presentation({ title, description }) {
    return (
        <div className="app-presentation__container">
            <h1 className="fw-bold">{title}</h1>
            {description && <p>{description}</p>}
            <span className="app-divider" />
        </div>
    );
}
Presentation.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};