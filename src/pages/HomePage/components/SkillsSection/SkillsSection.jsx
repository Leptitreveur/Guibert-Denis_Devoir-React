import './SkillsSection.scss';

import { ProgressbarsList } from 'src/components/progressbar/ProgressbarsList/ProgressbarsList';
import { SectionTitle } from 'src/components/common/SectionTitle/SectionTitle';

export const SkillSection = () => {
  <div className="app-progressbar__container">
    <SectionTitle title="Mes compétences" />
    <ProgressbarsList />
  </div>;
};
