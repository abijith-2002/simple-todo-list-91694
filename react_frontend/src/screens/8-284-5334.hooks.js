import { useState, useCallback } from 'react';

/**
 * PUBLIC_INTERFACE
 * useEpisodeSelection
 * Minimal hook to mirror two-option selection toggle from the static JS.
 * Returns state and handlers compatible with the Screen8 component.
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
