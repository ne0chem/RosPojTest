import React, { useId } from 'react';
import { fireServices } from '../../data/fireServices';
import './FireServices.css';

export default function FireServices() {
  const titleId = useId();
  return (
    <section className="fire-services" aria-labelledby={titleId}>
      <div className="fire-services-heading">
        <h2 id={titleId}>Испытание противопожарных<br className="fire-services-break" /> систем и огнезащитной обработки</h2>
      </div>
      <div className="fire-services-grid">
        {fireServices.map(({ id, title, standard, price, unit }) => (
          <a className="fire-service" key={id} href="#contact-form" aria-label={`${title}. Стоимость: ${price}, ${unit}. Оставить заявку`}>
            <div className="fire-service-image"><img src={`/images/services/fire/${id}.jpg`} alt="" loading="lazy" width="320" height="320" /></div>
            <div className="fire-service-description"><h3>{title}</h3><p>{standard}</p></div>
            <div className="fire-service-price"><span>Стоимость:</span><strong>{price}</strong>{unit && <small>{unit}</small>}</div>
          </a>
        ))}
      </div>
      <svg className="fire-services-wave" viewBox="0 0 1200 130" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fire-wave"><stop stopColor="#c5d3e7"/><stop offset=".56" stopColor="#e1e8f5"/><stop offset=".84" stopColor="#e60012"/><stop offset="1" stopColor="#e60012" stopOpacity="0"/></linearGradient></defs><path d="M0 104Q220 8 410 62T790 55T1200 40V130H0Z" fill="url(#fire-wave)"/><path d="M0 104Q220 8 410 62T790 55T1200 40M330 130Q650 5 890 37T1200 18" fill="none" stroke="white" strokeWidth="3"/></svg>
    </section>
  );
}

