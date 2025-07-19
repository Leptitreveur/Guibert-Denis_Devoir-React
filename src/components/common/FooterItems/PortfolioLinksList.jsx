import { Link } from 'react-router-dom';
import PortfolioCards from 'src/data/portfolioData.js';

export function PortfolioLinksList() {
  return (
    <fieldset className="">
      <legend className="">Mes dernières réalisations</legend>
      <ul className="">
        {PortfolioCards.map((data) => (
          <li key={data.id} className=''>
            <Link to={data.link} target="_blank" rel="noopenner noreferrer" className=''>
              <strong>{data.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
