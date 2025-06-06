import { SectionTitle } from 'jsx/components'
import PropTypes from "prop-types";

const progressBar = [];

const requieredFields = ['id', 'title', 'percent', 'color'];

// ! Est ce que les donnée transmise à formattedData sont bel et bien formatées
const addProgressBar = (data) => {
    const formattedData ={};
    requieredFields.forEach(field =>{
        formattedData[field] = data[field];
    })
    progressBar.push(formattedData);
}
// * Début ajout dynamique ===========================================================================================
addProgressBar({
    id :'html',
    title : 'html5',
    percent : 90,
    color : 'danger'
})
addProgressBar({
    id :'css',
    title : 'css3',
    percent : 80,
    color : 'info'
})
addProgressBar({
    id :'javascript',
    title : 'javascript',
    percent : 70,
    color : 'warning'
})
addProgressBar({
    id :'php',
    title : 'php',
    percent : 60,
    color : 'success'
})
addProgressBar({
    id :'react',
    title : 'react',
    percent : 50,
    color : 'primary'
})
// * Fin ajout dynamique =============================================================================================

const getProgressBar = (id) => progressBar.find(data => data.id === id) || {id : ''};

const ProgressBarBox = ({ dataId })=>{
    const {id, title, percent, color} = getProgressBar(dataId);

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
ProgressBarBox.propTypes ={
    dataId : PropTypes.string.isRequired
}

export const ProgressBarList = ({ selectedIds }) => {
    return(
        <div className="app-progressbar__container">
            <SectionTitle title = "Mes compétences"/>
            {progressBar
                .filter( progressBar => !selectedIds || selectedIds.includes(progressBar.id))
                .map(data =>
                    <ProgressBarBox key={data.id} dataId={data.id}/>
                )
            }
        </div>
    )
}
ProgressBarList.propTypes = {
    selectedIds : PropTypes.arrayOf(PropTypes.string)
}