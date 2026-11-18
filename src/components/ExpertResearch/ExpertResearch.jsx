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
      </div>
      <h3 className="expert-research-subtitle">Задачи, решаемые при расследовании пожаров и проведении экспертных исследований и испытаний:</h3>
      <ul className="expert-research-works">
        {expertResearchWorks.map((work) => (
          <li key={work}>
            <p>{work}</p>
          </li>
        ))}
      </ul>
      <div className="expert-research-description">
        <p>{expertResearchInspectionIntro}</p>
        <ul className="expert-research-works expert-research-inspection">
          {expertResearchInspectionWorks.map(({ text }) => (
            <li key={text}>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
