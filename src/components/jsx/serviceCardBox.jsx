import { PropTypes } from 'prop-types'

export const ServiceCardBox = ({ cardData }) => {

    if(!cardData){
        return null;
    }

    const {id, icon, title, text} = cardData;

    return(
        <div id = {`${id.replace(/\s+/g, '-').toLowerCase()}`} className="card-body app-card--service__body card-hover">
            <i className={`bi ${icon} card-img-top`} ></i>
            <h2 className="card-title fw-bold">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}

ServiceCardBox.propTypes = {
    cardData : PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired
}
