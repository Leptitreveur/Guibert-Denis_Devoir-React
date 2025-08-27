import { ProgressbarsList } from 'src/components/progressbar/ProgressbarsList/ProgressbarsList';
import { TitleSection } from 'src/components/common/TitleSection/TitleSection';

/**Titre + liste des barres de progression des compétences.*/
export const SkillPart = () => {
  return (
    <div className="col-12 col-md-6">
      <TitleSection title="Mes compétences" />
      <ProgressbarsList />
    </div>
  );
};
