import { ProgressbarsList } from 'src/components/progressbar/ProgressbarsList/ProgressbarsList';
import { TitleSection } from 'src/components/common/TitleSection/TitleSection';

/**
 * Section des compétences avec titre et barres de progression
 *
 * Composant affichant le titre de la section compétences et la liste
 * des barres de progression correspondantes. Utilise ProgressbarsList
 * pour afficher toutes les compétences disponibles.
 *
 * @returns {JSX.Element} Section des compétences avec barres de progression
 */
export const SkillPart = () => {
  return (
    <div className="col-12 col-md-6">
      <TitleSection title="Mes compétences" />
      <ProgressbarsList />
    </div>
  );
};
