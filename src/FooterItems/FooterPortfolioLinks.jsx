import { Link } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';
import { validateUrlFormat } from 'src/utils/validation/urlValidator';
import PortfolioCards from 'src/data/portfolioData';

/**
 * Liste des liens vers les réalisations dans le footer
 *
 * Affiche les titres des projets avec liens externes ou internes selon la validité
 * de l'URL. Utilise le contexte footer pour adapter les styles et la validation
 * d'URL pour déterminer le type de lien à afficher.
 *
 * @returns {JSX.Element} Liste des liens vers les réalisations
 */
export function PortfolioLinksList() {
  const { getClassProps } = useContextualStyle();

  return (
    <fieldset {...getClassProps('field', 'portfolio')}>
      <legend {...getClassProps('legend', 'portfolio')}>Mes dernières réalisations</legend>
      <ul {...getClassProps('list', 'portfolio')}>
        {PortfolioCards.map((data) => (
          <li key={data.id} {...getClassProps('lign', 'portfolio')}>
            {validateUrlFormat(data.link).isValid ? (
              <Link to={data.link} target="_blank" rel="noopener noreferrer" {...getClassProps('link', 'portfolio')}>
                <strong>{data.title}</strong>
              </Link>
            ) : (
              <Link to={`/PortfolioPage#${data.id}`} {...getClassProps('link', 'portfolio')}>
                <strong>{data.title}</strong>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
