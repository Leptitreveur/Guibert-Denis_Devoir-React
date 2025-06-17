import PropTypes from "prop-types";
import { useFilteredData } from "hooks/useFilteredData";

import allProgressBars from 'jsx/progressBarData.jsx'
import { ProgressBarBox } from 'jsx/progressBarBox'

export const ProgressBarList = ({ selectedIds }) => {

    const filteredCards = useFilteredData(allProgressBars, selectedIds, 'Progressbar');

    return(
            <div className="app-progressbar__content">

                {filteredCards.map(data =>
                        <ProgressBarBox key={data.id} barData={data}/>
                    )
                }
            </div>
    )
}

ProgressBarList.propTypes = {
    selectedIds : PropTypes.arrayOf(PropTypes.string)
}