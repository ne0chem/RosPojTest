import React, { useId } from 'react';
import { expertResearchTypes, expertResearchWorks, expertResearchDescription, expertResearchInspectionIntro, expertResearchInspectionWorks } from '../../data/expertResearch';
import './ExpertResearch.css';
import { serviceCategories } from '../../data/serviceCategories';

export default function ExpertResearch() {
  const titleId = useId();
  return (
    <section className="expert-research" aria-labelledby={titleId}>
      <h2 id={titleId}>{serviceCategories.find(({ id }) => id === 'research').title}</h2>
      <div className="expert-research-intro">
        <p>{expertResearchDescription[0]}</p>
        <div className="expert-research-visual" aria-hidden="true" />
      </div>
      <h3 className="expert-research-subtitle">Виды экспертных исследований</h3>
      <ul className="expert-research-works">
        {expertResearchTypes.map((type) => (
          <li key={type}><p>{type}</p></li>
        ))}
      </ul>
      <div className="expert-research-description expert-research-overview">
        {expertResearchDescription.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p>Задачи, решаемые при расследовании пожаров и проведении экспертных исследований и испытаний: {expertResearchWorks.map((work) => work.charAt(0).toLowerCase() + work.slice(1)).join('; ')}.</p>
        <p>{expertResearchInspectionIntro} {expertResearchInspectionWorks.map(({ text }) => text.charAt(0).toLowerCase() + text.slice(1)).join('; ')}.</p>
      </div>
    </section>
  );
}
