import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


const socialIcons= [];
const requiredFields =['id', 'link', 'icon'];

const addSocialIcons = (iconData) => {
    const formattedData={};
    requiredFields.forEach((field) => {
        formattedData[field] = iconData[field];
    });
    socialIcons.push(formattedData);
}
addSocialIcons({
    id :'github',
    link:'https://github.com/github-john-doe',
    icon:'bi-github',
})
addSocialIcons({
    id :'x',
    link:'https://x.com/?lang=fr',
    icon:'bi-twitter',
})
addSocialIcons({
    id :'linkedin',
    link:'https://www.linkedin.com/',
    icon:'bi-linkedin',
})
const getSocialIcons = (linkId) => socialIcons.find((sociallink)=> sociallink.id === linkId);

const SocialLinkBox = ({linkId}) => {
    const socialIcon = getSocialIcons(linkId);
    // Vérifier que socialIcon existe pour éviter des erreurs de déstructuration
    if (!socialIcon) return null;
    const { id, link, icon } = socialIcon;
return(
        <Link to={link} target="_blank" rel="noopener noreferrer" id ={id}>
            <i className={`bi ${icon} app_icon-social`}></i>
        </Link>
)
}
SocialLinkBox.propTypes = {
    linkId : PropTypes.string.isRequired,
}
export function SocialLinks({ selectedIds }){
return(
    <div className="app_socialContainer">
        {socialIcons
        .filter( (socialLink) => !selectedIds || selectedIds.includes(socialLink.id))
        .map ((socialLink)=> (
            <SocialLinkBox key={socialLink.id} linkId={socialLink.id} />
        ))}
    </div>
)
}
SocialLinks.propTypes ={
selectedIds : PropTypes.arrayOf(PropTypes.string)
}
