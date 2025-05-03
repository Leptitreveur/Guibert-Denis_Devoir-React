import { SectionTitle } from 'jsx/components'
import PropTypes from "prop-types";

const skills = [];

const requieredFields = ['id', 'title', 'percent', 'color'];

const addSkill = (skilldata) => {
    const formattedSkill ={};
    requieredFields.forEach(field =>{
        formattedSkill[field] = skilldata[field];
    })
    skills.push(formattedSkill);
}

addSkill({
    id :'html',
    title : 'html5',
    percent : 90,
    color : 'danger'
})
addSkill({
    id :'css',
    title : 'css3',
    percent : 80,
    color : 'info'
})
addSkill({
    id :'javascript',
    title : 'javascript',
    percent : 70,
    color : 'warning'
})
addSkill({
    id :'php',
    title : 'php',
    percent : 60,
    color : 'success'
})
addSkill({
    id :'react',
    title : 'react',
    percent : 50,
    color : 'primary'
})

const getSkillsAdd = (id) => skills.find(skill => skill.id === id) || {id : ''};

const SkillBox = ({ skillId })=>{
    const {id, title, percent, color} = getSkillsAdd(skillId);
    return(
        <div>
        <h3 className = "app_title-3">{title} {percent}%</h3>
        <div className = "progress app_progress-box">
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
SkillBox.propTypes ={
    skillId : PropTypes.string.isRequired
}

export const SkillsToShow = ({ selectedId }) => {
    return(
        <div className="app_skillToShowComponent">
            <SectionTitle title = "Mes compétences"/>
            {skills
                .filter( skills => !selectedId || selectedId.includes(skills.id))
                .map(skill =>
                    <SkillBox key={skill.id} skillId={skill.id}/>
                )
            }
        </div>
    )
}
SkillsToShow.propTypes = {
    selectedId : PropTypes.arrayOf(PropTypes.string)
}