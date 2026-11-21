import React, { useId } from 'react';
import { fireServices } from '../../data/fireServices';
import { serviceCategories } from '../../data/serviceCategories';
import './FireServices.css';

export default function FireServices({ categoryId = 'testing' }) {
  const titleId = useId();
  const category = serviceCategories.find(({ id }) => id === categoryId);
  const services = fireServices.filter((service) => service.category === categoryId);
  return (
    <section className="fire-services" aria-labelledby={titleId}>
      <div className="fire-services-heading">
        <h2 id={titleId}>{category.title}</h2>
      </div>
      <div className="fire-services-grid">
        {services.map(({ id, title, description, standard, price, unit, image }) => (
          <article className="fire-service" key={id}>
            <div className="fire-service-image"><img src={`/images/services/fire/${image || id}.jpg`} alt="" loading="lazy" width="320" height="320" /></div>
            <div className="fire-service-description">
              <h3>{title}</h3>
              {description && <p className="fire-service-method">{description}</p>}
              {standard && <div className="fire-service-standards">{standard.split(/,\s*| и (?=ГОСТ|СП)/).map((item) => <p className="fire-service-standard" key={item}>{item}</p>)}</div>}
            </div>
            <div className="fire-service-price">
              <div className="fire-service-price-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="m3 11 13-8 13 8-13 8ZM3 16l13 8 13-8M3 21l13 8 13-8" /></svg></div>
              <span>Стоимость:</span><strong>{price}</strong>{unit && <small>{unit}</small>}
            </div>
          </article>
        ))}
      </div>
      <svg className="fire-services-wave" viewBox="0 0 1200 130" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fire-wave"><stop stopColor="#c5d3e7"/><stop offset=".56" stopColor="#e1e8f5"/><stop offset=".84" stopColor="#e60012"/><stop offset="1" stopColor="#e60012" stopOpacity="0"/></linearGradient></defs><path d="M0 104Q220 8 410 62T790 55T1200 40V130H0Z" fill="url(#fire-wave)"/><path d="M0 104Q220 8 410 62T790 55T1200 40M330 130Q650 5 890 37T1200 18" fill="none" stroke="white" strokeWidth="3"/></svg>
    </section>
  );
}

