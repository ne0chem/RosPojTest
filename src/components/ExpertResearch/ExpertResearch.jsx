import React, { useId } from 'react';
import { expertResearchWorks, expertResearchDescription } from '../../data/expertResearch';
import './ExpertResearch.css';

export default function ExpertResearch() {
  const titleId = useId();
  return (
    <section className="expert-research" aria-labelledby={titleId}>
      <h2 id={titleId}>Экспертные исследования</h2>
      <div className="expert-research-intro">
        <p>{expertResearchDescription[0]}</p>
        <div className="expert-research-visual" aria-hidden="true" />
      </div>
      <ul className="expert-research-works">
        {expertResearchWorks.map((work) => (
          <li key={work}>
            <span className="expert-research-marker" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-5-5 5 5-5 5" /></svg>
            </span>
            <p>{work}</p>
          </li>
        ))}
      </ul>
      <div className="expert-research-description">
        {expertResearchDescription.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
