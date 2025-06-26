import HeroBg from 'src/assets/images/hero-bg.jpg';
import BannerBg from 'src/assets/images/banner.jpg';

// import './BackgroundImage.scss';

export function BgHero() {
  return <img src={HeroBg} alt="Hero background" className="app-image__hero" />;
}

export function BgBanner() {
  return <img src={BannerBg} alt="Banner background" className="app-image__banner" />;
}
