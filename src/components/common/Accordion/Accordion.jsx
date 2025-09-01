import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import Collapse from 'bootstrap/js/dist/collapse';

/**
 * Élément d'accordéon Bootstrap avec titre et contenu collapsible
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.title - Titre de l'accordéon
 * @param {ReactNode} props.text - Contenu de l'accordéon
 * @param {string} props.id - Identifiant unique pour l'accordéon
 * @returns {JSX.Element} Élément d'accordéon avec titre et contenu collapsible
 */
export function AccordionItem({ title, text, id }) {
  const collapseRef = useRef(null);

  /**
   * Effet pour initialiser le collapse Bootstrap
   */
  useEffect(() => {
    if (collapseRef.current) {
      new Collapse(collapseRef.current, {
        toggle: false,
      });
    }
  });

  return (
    <div className="accordion ">
      <div className="accordion-item ">
        <h2 className="accordion-header fw-bold">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
            {title}
          </button>
        </h2>
        <div id={`collapse${id}`} ref={collapseRef} className="accordion-collapse collapse">
          <div className="accordion-body">{text}</div>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};
