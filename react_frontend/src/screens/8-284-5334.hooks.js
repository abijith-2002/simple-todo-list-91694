import { useState, useCallback } from 'react';

/**
 * PUBLIC_INTERFACE
 * useEpisodeSelection
 * Minimal hook to mirror two-option selection toggle from the static JS.
 * Returns state and handlers compatible with the Screen8 component.
 */
/**
 * PUBLIC_INTERFACE
 * A small helper hook for two-state selection between 'primary' and 'secondary'.
 * @param {('primary'|'secondary')} [initial='primary'] initial selected state
 * @returns {{
 *  selected: 'primary'|'secondary',
 *  isPrimary: boolean,
 *  isSecondary: boolean,
 *  selectPrimary: () => void,
 *  selectSecondary: () => void
 * }}
 */
export function useEpisodeSelection(initial = 'primary') {
  const [selected, setSelected] = useState(initial);

  const selectPrimary = useCallback(() => setSelected('primary'), []);
  const selectSecondary = useCallback(() => setSelected('secondary'), []);

  return {
    selected,
    isPrimary: selected === 'primary',
    isSecondary: selected === 'secondary',
    selectPrimary,
    selectSecondary,
  };
}
