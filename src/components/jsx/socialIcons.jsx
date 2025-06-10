import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const socialIcons= [];

const requiredFields =['id', 'link', 'icon'];

// !est ce que formattedData reçoit bien des données formatées? 
// ! est ce que addIcon est précis comme nom car il ajoute aussi un lien attaché à l'icône
const addIcon = (data) => {
    const formattedData={};
    requiredFields.forEach((field) => {
        formattedData[field] = data[field];
    });
    socialIcons.push(formattedData);
}
// * Ajout dynamique  ==================================================================================
addIcon({
    id :'github',
    link:'https://github.com/github-john-doe',
    icon:'bi-github',
})
addIcon({
    id :'x',
    link:'https://x.com/?lang=fr',
    icon:'bi-twitter',
})
addIcon({
    id :'linkedin',
    link:'https://www.linkedin.com/',
    icon:'bi-linkedin',
})
// * Fin d'ajout dynamique =============================================================================

const getSocialIcons = (id) => socialIcons.find((data)=> data.id === id);

const SocialIconBox = ({dataId}) => {
    const socialIcon = getSocialIcons(dataId);
    const { id, link, icon } = socialIcon;

    // Vérifier que socialIcon existe pour éviter des erreurs de déstructuration et eviter l'ajout d'un composant inutile
    if (!socialIcon) return null;

return(
        <Link to={link} target="_blank" rel="noopener noreferrer" id ={id} className="app-footer__link">
            <i className={`bi ${icon} app-footer__icon`}></i>
        </Link>
)
}
SocialIconBox.propTypes = {
    dataId : PropTypes.string.isRequired,
}
export function SocialIconList({ selectedIds }){
return(
    <div className="app-footer__box--icon">
        {socialIcons
        .filter( data => !selectedIds || selectedIds.includes(data.id))
        .map (data=> (
            <SocialIconBox key={data.id} dataId={data.id} />
        ))}
    </div>
)
}
SocialIconList.propTypes ={
    selectedIds : PropTypes.arrayOf(PropTypes.string)
}
