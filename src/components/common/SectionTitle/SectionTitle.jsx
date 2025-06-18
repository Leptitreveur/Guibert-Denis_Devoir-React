import { PropTypes } from "prop-types";

export function SectionTitle({ title }) {
    return (
        <div className="app-section--title__container">
            <h2 className="fw-bold">{title}</h2>
            <span className="app-title--underline" />
        </div>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};