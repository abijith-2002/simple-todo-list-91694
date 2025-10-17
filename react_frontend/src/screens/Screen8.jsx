import React, { useEffect, useState, useCallback } from 'react';
import './8-284-5334.css';

/*
  PUBLIC_INTERFACE
  Screen8 component
  This component is generated from Figma screen "8" (node 284:5334).
  Markup and classNames are preserved one-to-one from the static export for pixel accuracy.
  Styles are isolated in src/screens/8-284-5334.css. The background image is served from public/assets/figmaimages.
*/

// PUBLIC_INTERFACE
export default function Screen8() {
  /** Render the PlayerPopOption overlay with two-button selection behavior. */

  // Selection state mirrors the original JS toggle between primary and secondary
  // Note: This is a plain JSX file, so we avoid TypeScript generic syntax here.
  const [selected, setSelected] = useState('primary');

  // Maintain aria-pressed consistency with state
  const isPrimarySelected = selected === 'primary';
  const isSecondarySelected = selected === 'secondary';

  // Handlers replicating the original behavior
  const handlePrimaryClick = useCallback(() => {
    setSelected('primary');
  }, []);

  const handleSecondaryClick = useCallback(() => {
    setSelected('secondary');
  }, []);

  // Side effect to ensure document background is dark like the static page expectation
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#000000';
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, []);

  return (
    <div className="screen-8" role="application">
      {/* Background image (from JSON export).
          Note: This loads from public/assets/figmaimages. Do not change file name. */}
      <img
        className="bg"
        src="/assets/figmaimages/screen_284-5334.png"
        alt="Background still from show"
      />

      {/* Full overlay gradient (OverlayFull / Degradado_abajo) */}
      <div className="overlay-full" aria-hidden="true"></div>

      {/* PlayerPopOption */}
      <section className="player-pop-option" role="dialog" aria-label="Opciones de grabación">
        <div className="ppo-left">
          <h1 className="ppo-title">¿Deseas grabar sólo este episodio o toda la serie?</h1>
          <p className="ppo-subtitle">Puedes grabar el episodio actual o la serie completa</p>
        </div>
        <div className="ppo-right">
          {/* We keep the classNames identical, and use state to align aria-pressed.
              Visual class toggling from the static JS is represented by keeping the
              base classes and relying on the CSS which already styles .btn-primary vs .btn-secondary.
              We preserve primary as white and secondary as translucent/dark as in design. */}
          <button
            className={`btn ${isPrimarySelected ? 'btn-primary' : 'btn-secondary'}`}
            data-variant="primary"
            aria-pressed={isPrimarySelected ? 'true' : 'false'}
            onClick={handlePrimaryClick}
            type="button"
          >
            Episodio actual
          </button>
          <button
            className={`btn ${isSecondarySelected ? 'btn-primary' : 'btn-secondary'}`}
            data-variant="secondary"
            aria-pressed={isSecondarySelected ? 'true' : 'false'}
            onClick={handleSecondaryClick}
            type="button"
          >
            Serie completa
          </button>
        </div>
      </section>
    </div>
  );
}
