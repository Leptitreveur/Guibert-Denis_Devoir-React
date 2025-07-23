import { Link } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';
import PortfolioCards from 'src/data/portfolioData';

export function PortfolioLinksList() {
  const { getClassProps } = useContextualStyle();

  return (
    <fieldset {...getClassProps('field', 'portfolio')}>
      <legend {...getClassProps('legend', 'portfolio')}>Mes dernières réalisations</legend>
      <ul {...getClassProps('list', 'portfolio')}>
        {PortfolioCards.map((data) => (
          <li key={data.id} {...getClassProps('lign', 'portfolio')}>
            <Link to={data.link} target="_blank" rel="noopenner noreferrer" {...getClassProps('link', 'portfolio')}>
              <strong>{data.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
