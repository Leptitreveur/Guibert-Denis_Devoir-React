import { Link } from 'react-router-dom';

import { useContextualStyle } from 'src/hooks/useContextualStyle';
import PortfolioCards from 'src/data/portfolioData';

export function PortfolioLinksList() {
  const style = useContextualStyle();

  return (
    <fieldset className={style.getPortfolioField()}>
      <legend className={style.getPortfolioLegend()}>Mes dernières réalisations</legend>
      <ul className={style.getPortfolioList()}>
        {PortfolioCards.map((data) => (
          <li key={data.id} className={style.getPortfolioLign()}>
            <Link to={data.link} target="_blank" rel="noopenner noreferrer" className={style.getPortfolioLink()}>
              <strong>{data.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
