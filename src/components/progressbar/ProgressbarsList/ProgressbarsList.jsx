import PropTypes from 'prop-types';

import './ProgressbarsList.scss';

import { useFilteredData } from 'src/hooks/useFilteredData';
import allProgressBars from 'src/data/progressbarsData.js';
import { Progressbar } from 'src/components/progressbar/Progressbar/Progressbar';

export const ProgressbarsList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(allProgressBars, selectedIds, 'Progressbar');

  return (
    <div className="app-progressbar__content">
      {filteredCards.map((data) => (
        <Progressbar key={data.id} barData={data} />
      ))}
    </div>
  );
};

ProgressbarsList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};
