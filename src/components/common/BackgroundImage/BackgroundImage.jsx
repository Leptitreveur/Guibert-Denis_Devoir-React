import HeroBg from 'src/assets/images/hero-bg.jpg';
import BannerBg from 'src/assets/images/banner.jpg';

export function BgHero() {
  return <img src={HeroBg} alt="Hero background" className="w-100 h-100 object-fit-cover opacity-75" loading="lazy"/>; 
}

export function BgBanner() {
  return <img src={BannerBg} alt="Banner background" className="app-image__banner app-h-3.5rem w-100 overflow-hidden" loading="lazy"/>;
}
