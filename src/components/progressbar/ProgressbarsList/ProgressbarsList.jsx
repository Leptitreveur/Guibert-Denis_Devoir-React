import PropTypes from 'prop-types';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allProgressBars from 'src/data/progressbarsData.js';
import { Progressbar } from 'src/components/progressbar/Progressbar/Progressbar';

/** Liste de barres de progression avec filtrage par IDs.
 * @param {string[]} selectedIds - IDs des barres à afficher
 */
export const ProgressbarsList = ({ selectedIds = [] }) => {
  const filteredCards = useFilteredData(allProgressBars, selectedIds, 'Progressbar');

  return (
    <>
      {filteredCards.map((data) => (
        <Progressbar key={data.id} barData={data} />
      ))}
    </>
  );
};

ProgressbarsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
