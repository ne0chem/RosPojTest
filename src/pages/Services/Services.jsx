import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import FireServices from '../../components/FireServices/FireServices';
import RiskAssessment from '../../components/RiskAssessment/RiskAssessment';
import ExpertResearch from '../../components/ExpertResearch/ExpertResearch';
import Accreditation from '../../components/Accreditation/Accreditation';
import DocumentationCompliance from '../../components/DocumentationCompliance/DocumentationCompliance';
import { serviceCategories } from '../../data/serviceCategories';
import './Services.css';

export default function Services() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const detailsRef = useRef(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const selected = serviceCategories.find(({ id }) => hash === `#${id}`);
    if (selected) setCategory(selected);
    else if (!hash) setCategory(null);
  }, [hash]);
  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  };

  useEffect(() => {
    if (category) {
      const frame = requestAnimationFrame(scrollToDetails);
      return () => cancelAnimationFrame(frame);
    }
  }, [category]);

  function selectCategory(id) {
    if (category?.id === id) scrollToDetails();
    else navigate({ pathname: '/services', hash: `#${id}` }, { preventScrollReset: true });
  }

  return <>
    <section className="services-hero" aria-labelledby="services-page-title">
      <h1 id="services-page-title">Услуги лаборатории</h1>
      <p>Испытания, экспертиза и оценка соответствия в области пожарной безопасности.</p>
      <a className="button services-hero-cta" href="#contact-form">Обсудить задачу</a>
    </section>
    <ServicesSection onSelect={selectCategory} selectedId={category?.id} detailsId="service-category-details" />
    <div id="service-category-details" className="service-category-details" ref={detailsRef} hidden={!category}>
      {category && <>
        {category.id === 'testing' ? <FireServices /> : category.id === 'risk' ? <RiskAssessment /> : category.id === 'research' ? <ExpertResearch /> : category.id === 'accreditation' ? <Accreditation /> : <DocumentationCompliance />}
      </>}
    </div>
  </>;
}
