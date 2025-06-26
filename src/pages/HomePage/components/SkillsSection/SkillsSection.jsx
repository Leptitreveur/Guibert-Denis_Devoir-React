// import './SkillsSection.scss';

import { ProgressbarsList } from 'src/components/progressbar/ProgressbarsList/ProgressbarsList';
import { SectionTitle } from 'src/components/common/SectionTitle/SectionTitle';

export const SkillSection = () => {
  return(
    <div className="w-100">
      <SectionTitle title="Mes compétences" />
      <ProgressbarsList />
    </div>
  )
};
