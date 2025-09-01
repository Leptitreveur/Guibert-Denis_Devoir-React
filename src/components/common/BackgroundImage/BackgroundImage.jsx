import HeroBg from 'src/assets/images/hero-bg.jpg';
import BannerBg from 'src/assets/images/banner.jpg';

/**
 * Image de fond pour la bannière d'accueil
 *
 * @returns {JSX.Element} Image de fond pour la bannière d'accueil
 */
export function BgHero() {
  return <img src={HeroBg} alt="Hero background" loading="lazy" className="w-100 h-100 object-fit-cover opacity-75" />;
}

/**
 * Image de fond pour les bannières de page
 *
 * @returns {JSX.Element} Image de fond pour les bannières de page
 */
export function BgBanner() {
  return <img src={BannerBg} alt="Banner background" loading="lazy" className="app-h-5rem app-h-md-13rem w-100 overflow-hidden" />;
}
