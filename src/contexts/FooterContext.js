import { createContext } from 'react';

/**
 * Contexte FooterStyle - Gestion du contexte d'affichage footer
 *
 * Contexte React permettant de déterminer si un composant est utilisé
 * dans le footer pour appliquer des styles spécifiques adaptés à ce contexte.
 * Utilisé par le hook useContextualStyle pour adapter l'apparence des composants.
 *
 * @type {React.Context<boolean>} Contexte avec valeur booléenne (true si dans footer)
 */
export const FooterStyle = createContext();
