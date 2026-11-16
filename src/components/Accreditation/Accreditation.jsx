import React, { useId } from 'react';
import { accreditationDescription } from '../../data/accreditation';
import './Accreditation.css';
import Certificate from './Certificate';
import { serviceCategories } from '../../data/serviceCategories';

export default function Accreditation() {
  const titleId = useId();
  return (
    <section className="accreditation" aria-labelledby={titleId}>
      <h2 id={titleId}>{serviceCategories.find(({ id }) => id === 'accreditation').title}</h2>
      <Certificate />
      <div className="accreditation-description">
        {accreditationDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
