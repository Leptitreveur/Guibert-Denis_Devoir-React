import PropTypes from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allProgressBars from "data/progressBarsData.js";
import { Progressbar } from "progressbar/Progressbar/Progressbar";

export const ProgressbarList = ({ selectedIds }) => {
  const filteredCards = useFilteredData(
    allProgressBars,
    selectedIds,
    "Progressbar"
  );

  return (
    <div className="app-progressbar__content">
      {filteredCards.map((data) => (
        <Progressbar key={data.id} barData={data} />
      ))}
    </div>
  );
};

ProgressbarList.propTypes = {
  selectedIds: PropTypes.arrayOf(PropTypes.string),
};