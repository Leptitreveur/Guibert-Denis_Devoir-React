// import './SkillsSection.scss';

import { ProgressbarsList } from 'src/components/progressbar/ProgressbarsList/ProgressbarsList';
import { SectionTitle } from 'src/components/common/SectionTitle/SectionTitle';

export const SkillSection = () => {
  return(
    <div className="col-12 col-md-6">
      <SectionTitle title="Mes compétences" />
      <ProgressbarsList />
    </div>
  )
};
