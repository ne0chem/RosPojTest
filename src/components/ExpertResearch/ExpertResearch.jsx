import React, { useId } from 'react';
import { expertResearchTypes, expertResearchWorks, expertResearchDescription, expertResearchInspectionIntro, expertResearchInspectionWorks } from '../../data/expertResearch';
import './ExpertResearch.css';
import researchImage from '../../assets/research/fire-investigation.png';
import { serviceCategories } from '../../data/serviceCategories';

export default function ExpertResearch() {
  const titleId = useId();
  return (
    <section className="expert-research" aria-labelledby={titleId}>
      <div className="expert-research-hero">
      <h2 id={titleId}>{serviceCategories.find(({ id }) => id === 'research').title}</h2>
      <div className="expert-research-intro">
        <p>{expertResearchDescription[0]}</p>

      </div>
      <div className="expert-research-visual" aria-hidden="true"><svg className="expert-research-ribbon" viewBox="0 0 1000 400" preserveAspectRatio="none"><defs><linearGradient id={`${titleId}-ribbon`} x2="0.8" y2="1"><stop stopColor="#dcb4bd" stopOpacity="0" /><stop offset="0.55" stopColor="#c17c89" /><stop offset="1" stopColor="#981e30" /></linearGradient></defs><path d="M0 385C310 210 650 245 1000 70L1000 180C650 310 310 270 0 395Z" fill={`url(#${titleId}-ribbon)`} stroke="white" strokeWidth="2" /><path d="M50 300C370 90 750 130 1000 0" stroke="white" strokeOpacity="0.65" strokeWidth="2" fill="none" /></svg><img src={researchImage} alt="" /></div>
      </div>
      <h3 className="expert-research-subtitle">Виды экспертных исследований</h3>
      <ul className="expert-research-works">
        {expertResearchTypes.map((type) => (
          <li key={type}><span className="expert-research-marker" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M24 5H10a3 3 0 0 0-3 3v25h22V11Z" /><path d="M23 5v8h7M13 19h8M13 25h5" /><circle cx="27" cy="26" r="6" /><path d="m31 31 5 5" /></svg></span><p>{type}</p></li>
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

