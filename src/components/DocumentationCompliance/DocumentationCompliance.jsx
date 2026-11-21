import React, { useId } from 'react';
import { documentationIntro, documentationElements, documentationConclusion } from '../../data/documentationCompliance';
import './DocumentationCompliance.css';
import documentationImage from '../../assets/documentation/project-compliance.png';

export default function DocumentationCompliance() {
  const titleId = useId();
  return (
    <section className="documentation-compliance" aria-labelledby={titleId}>
      <div className="documentation-compliance-hero">
      <h2 id={titleId}>Определение соответствия проектной документации в области ПБ</h2>
      <div className="documentation-compliance-lead">
        <p>Выполнение оценки соответствия проектно-сметной документации установленным требованиям пожарной безопасности</p>

      </div>
      <div className="documentation-compliance-visual" aria-hidden="true"><svg className="documentation-compliance-ribbon" viewBox="0 0 1000 400" preserveAspectRatio="none"><defs><linearGradient id={`${titleId}-ribbon`} x2="0.8" y2="1"><stop stopColor="#dcb4bd" stopOpacity="0" /><stop offset="0.55" stopColor="#c17c89" /><stop offset="1" stopColor="#981e30" /></linearGradient></defs><path d="M0 385C310 210 650 245 1000 70L1000 180C650 310 310 270 0 395Z" fill={`url(#${titleId}-ribbon)`} stroke="white" strokeWidth="2" /><path d="M50 300C370 90 750 130 1000 0" stroke="white" strokeOpacity="0.65" strokeWidth="2" fill="none" /></svg><img src={documentationImage} alt="" /></div>
      </div>
      <div className="documentation-compliance-copy">
        {documentationIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ol className="documentation-compliance-elements">
        {documentationElements.map(({ title, text }) => (
          <li key={title}><span className="documentation-compliance-icon" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M24 5H10a3 3 0 0 0-3 3v25h24V12Z" /><path d="M23 5v9h8M13 21h9m-9 6h6m4 2 4 4 9-11" /></svg></span><h3>{title}</h3><p>{text}</p></li>
        ))}
      </ol>
      <div className="documentation-compliance-conclusion"><p>{documentationConclusion}</p></div>
    </section>
  );
}
