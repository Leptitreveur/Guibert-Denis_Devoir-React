/** Gestion des images du portfolio
 * Importe et associe les images aux IDs des réalisations
 */

import Coder from 'src/assets/images/portfolio/coder.jpg';
import EspaceBienEtre from 'src/assets/images/portfolio/espace-bien-etre.jpg';
import FreshFood from 'src/assets/images/portfolio/fresh-food.jpg';
import JapaneseRestaurant from 'src/assets/images/portfolio/restaurant-japonais.jpg';
import Screens from 'src/assets/images/portfolio/screens.jpg';
import Seo from 'src/assets/images/portfolio/seo.jpg';

// Association des images aux IDs des réalisations
const PortfolioImages = {
  coder: Coder,
  wellbeing: EspaceBienEtre,
  freshfood: FreshFood,
  japrest: JapaneseRestaurant,
  screens: Screens,
  seo: Seo,
};

export default PortfolioImages;
