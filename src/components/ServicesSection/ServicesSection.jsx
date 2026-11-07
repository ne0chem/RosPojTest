import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../../data/serviceCategories';
import './ServicesSection.css';

function ServiceIcon({ name }) {
  const drawings = {
    fire: <><path d="M26 4c2 12-10 13-8 23 1-5 5-7 7-11 1 7 12 10 10 20 7-4 8-12 5-18 12 16 5 31-13 31C8 49 4 32 14 19c-1 7 0 10 2 12C11 18 24 15 26 4Z"/><path className="service-icon-accent" d="M27 29c1 7-6 8-6 14a7 7 0 0 0 14 0c0-5-6-8-8-14Z"/></>,
    inspection: <><path d="M31 9H13a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h20M21 9V6h9v3h5v6H17V9Z"/><circle className="service-icon-accent" cx="36" cy="31" r="11"/><path className="service-icon-accent" d="m44 39 8 9"/></>,
    microscope: <><path d="m27 5 9 5-12 22-9-5ZM26 6l3-5 8 5-3 5M18 30l-2 4 6 3 3-4M27 31c12 0 15 15 3 17H13v5h33M10 42h16M36 19c19 5 20 29 5 34"/><path className="service-icon-accent" d="M39 24c10 5 12 20 2 25"/></>,
    alarm: <><circle cx="26" cy="26" r="19"/><path d="m17 44-5 7h29l-5-7M26 10v2m0 28v2M10 26h2m28 0h2M26 26l7-7"/><path className="service-icon-accent" d="M49 16a23 23 0 0 1 0 22m5-28a32 32 0 0 1 0 34"/></>,
    documents: <><path d="m13 13-5 2-2 32 25 3 2-7M20 5l29 9-11 35L9 40Z M23 15l16 5m-19 3 16 5m-19 3 12 4"/><path className="service-icon-accent" d="m51 20-9 31-11-3"/></>,
  };
  return <svg className="service-icon" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[name]}</svg>;
}

export default function ServicesSection({ onSelect, selectedId, detailsId }) {
  const titleId = useId();
  const Card = onSelect ? 'button' : Link;
  return (
<section className="services-section" aria-labelledby={titleId}>
      <h2 id={titleId} className="text-title">Наши услуги</h2>
      <div className="services-section-grid">
        {serviceCategories.map(({ id, icon, title, image }) => (
          <Card key={id} {...(onSelect ? { type: 'button', onClick: () => onSelect(id), 'aria-expanded': selectedId === id, 'aria-controls': detailsId } : { to: `/services#${id}` })} className={`service-card service-card--${id}`} style={image ? { '--service-image': `url('/images/services/${image}.jpg')` } : undefined}>
            <ServiceIcon name={icon} />
            <h3>{title}</h3>
            <span className="service-card-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </span>
          </Card>
        ))}
      </div>
    </section>
  );
}
