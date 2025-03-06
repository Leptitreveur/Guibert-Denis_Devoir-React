import PropTypes from "prop-types";


export function Progressbar({ title, percentage, color }){
    return(
        <div>
            <h4 className = "title">{title} {percentage}%</h4>
            <div className = "progress mb-4" style = {{ height : '15px' }}>
                <div
                    className = {`progress-bar ${color}`}
                    style = {{width: `${percentage}%`}}
                    aria-valuenow = {percentage}
                    aria-valuemin = "0"
                    aria-valuemax = "100">
                </div>
            </div>
        </div>
    )
}

Progressbar.propTypes = {
    title : PropTypes.string.isRequired,
    percentage : PropTypes.number.isRequired,
    color : PropTypes.string.isRequired
}