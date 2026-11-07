import React from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import './Services.css';

export default function Services() {
  return <>
    <section className="services-hero" aria-labelledby="services-page-title">
      <nav className="services-breadcrumbs" aria-label="Хлебные крошки">
        <Link to="/">Главная</Link><span aria-hidden="true">/</span><span aria-current="page">Услуги</span>
      </nav>
      <h1 id="services-page-title">Услуги лаборатории</h1>
      <p>Испытания, экспертиза и оценка соответствия в области пожарной безопасности.</p>
      <a className="button services-hero-cta" href="#contact-form">Обсудить задачу</a>
    </section>
    <ServicesSection cardHref="#contact-form" />
  </>;
}
