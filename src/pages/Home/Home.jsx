import React from 'react';
import './Home.css';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import WhyUs from '../../components/WhyUs/WhyUs';

export default function Home() {
  return <>
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-content">
        <h1 id="home-hero-title">ИСПЫТАТЕЛЬНАЯ<br />ПОЖАРНАЯ<br />ЛАБОРАТОРИЯ</h1>
        <a className="button home-hero-cta" href="#contact-form">
          Оставить заявку
        </a>
      </div>
    </section>
    <ServicesSection />
    <AboutCompany imageSrc="/images/about.png" />
    <WhyUs imageSrc="/images/plus.png" />
  </>;
}
