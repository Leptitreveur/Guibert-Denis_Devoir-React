import HeroBg from 'src/assets/images/hero-bg.jpg';
import BannerBg from 'src/assets/images/banner.jpg';

export function BgHero() {
  return <img src={HeroBg} alt="Hero background" loading="lazy" className="w-100 h-100 object-fit-cover opacity-75" />; 
}

export function BgBanner() {
  return <img src={BannerBg} alt="Banner background" loading="lazy" className="app-h-3rem w-100 overflow-hidden" />;
}
