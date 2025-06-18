import { PropTypes } from 'prop-types';

export const Progressbar = ({ barData })=>{

    if(!barData){
        return null;
    }

    const {id, title, percent, color} = barData;

    return(
        <div>
        <h3 className = "app-title--3">{title} {percent}%</h3>
        <div className = "progress app-progressbar__box">
            <div
                id = {id}
                className = {`progress-bar bg-${color}`}
                style = {{width: `${percent}%`}}
                aria-valuenow = {percent}
                aria-valuemin = "0"
                aria-valuemax = "100">
            </div>
        </div>
    </div>
    )
}
Progressbar.propTypes ={
    barData : PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        percent: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired
}