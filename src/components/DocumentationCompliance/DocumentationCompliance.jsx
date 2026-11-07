import React, { useId } from 'react';
import { documentationIntro, documentationElements, documentationConclusion } from '../../data/documentationCompliance';
import './DocumentationCompliance.css';

export default function DocumentationCompliance() {
  const titleId = useId();
  return (
    <section className="documentation-compliance" aria-labelledby={titleId}>
      <h2 id={titleId}>Определение соответствия проектной документации в области ПБ</h2>
      <div className="documentation-compliance-lead">
        <p>Выполнение оценки соответствия проектно-сметной документации установленным требованиям пожарной безопасности</p>
        <div className="documentation-compliance-visual" aria-hidden="true" />
      </div>
      <div className="documentation-compliance-copy">
        {documentationIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <ol className="documentation-compliance-elements">
        {documentationElements.map(({ title, text }) => (
          <li key={title}><h3>{title}</h3><p>{text}</p></li>
        ))}
      </ol>
      <div className="documentation-compliance-conclusion"><p>{documentationConclusion}</p></div>
    </section>
  );
}
