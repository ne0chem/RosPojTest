import React from 'react';
import './AboutCompany.css';

function DirectionIcon({ type }) {
  const paths = {
    fire: <><path d="M23 4c3 10-9 14-7 23 1-4 4-6 6-9 1 7 12 10 10 18 6-4 7-10 5-15 9 12 4 25-10 25C11 46 7 32 14 22c-1 6 0 9 2 11C12 20 23 16 23 4Z"/><path className="about-direction-accent" d="M25 29c0 5-5 8-5 12a6 6 0 0 0 12 0c0-5-5-7-7-12Z"/></>,
    systems: <><path d="m4 18 24-13 24 13-24 13Z"/><path className="about-direction-accent" d="m10 28-6 4 24 13 24-13-6-4"/></>,
    research: <><ellipse cx="28" cy="28" rx="11" ry="24"/><ellipse cx="28" cy="28" rx="11" ry="24" transform="rotate(60 28 28)"/><ellipse cx="28" cy="28" rx="11" ry="24" transform="rotate(120 28 28)"/><circle className="about-direction-accent" cx="28" cy="28" r="4" fill="currentColor"/></>,
  };
  return <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

export default function AboutCompany({ imageSrc }) {
  return (
    <section id="about-company" className="about-company" aria-labelledby="about-company-title">
      <div className="about-company-intro">
        <div className="about-company-copy">
          <p className="about-company-eyebrow">О компании</p>
          <h2 id="about-company-title">РОСПОЖТЕСТ</h2>
          <p className="about-company-subtitle">Испытательная пожарная лаборатория</p>
          <p className="about-company-lead">Добро пожаловать в частную испытательную пожарную лабораторию! Мы являемся ведущими экспертами в области пожарной безопасности и предлагаем широкий спектр услуг для проверки и анализа материалов, конструкций и систем, связанных с пожарной защитой.</p>
          <p>Наша лаборатория оборудована современными технологиями и высокоточным оборудованием, что позволяет нам проводить различные испытания согласно международным нормам и стандартам. Мы работаем с различными индустриями, включая строительство, автомобильную, электротехническую и многие другие.</p>
        </div>
        <div className="about-company-visual" aria-hidden="true">
          {imageSrc && <img src={imageSrc} alt="" loading="lazy" />}
        </div>
      </div>
      <div className="about-company-details">
        <p>Наша команда состоит из опытных специалистов, которые обладают глубокими знаниями в области пожарной безопасности. Мы предлагаем услуги по испытанию и сертификации материалов и изделий на пожаростойкость, а также проводим исследования и разработки новых методов и технологий для повышения уровня пожарной защиты.</p>
        <p>В рамках наших услуг мы проводим испытания на горючесть, огнестойкость, токсичность дыма, теплопроводность и другие характеристики материалов и конструкций. Мы также осуществляем тестирование и сертификацию систем пожарной защиты, включая детекторы дыма, автоматические пожарные системы и прочие устройства.</p>
        <p>Мы гордимся тем, что наши исследования и испытания помогают компаниям повысить уровень безопасности и защиты от пожаров. Наша лаборатория сотрудничает с организациями и государственными учреждениями, чтобы обеспечить соблюдение всех необходимых стандартов и требований.</p>
        <div>
          <p>Если вам нужны профессиональные услуги по испытанию пожарной безопасности, вы можете полностью положиться на нашу команду экспертов. Мы гарантируем качество и точность результатов, а также поддерживаем конфиденциальность ваших данных.</p>
          <p>Не стесняйтесь обращаться к нам с вопросами или запросами. Мы всегда готовы помочь вам в обеспечении безопасности и защиты от пожаров.</p>
        </div>
      </div>
      <div className="about-company-directions">
        <article className="about-direction">
          <div className="about-direction-icon"><DirectionIcon type="fire" /></div>
          <div><h3>Испытания<br />и сертификация</h3><p>Проводим испытания на горючесть, огнестойкость, токсичность дыма и другие характеристики материалов и конструкций.</p></div>
        </article>
        <article className="about-direction">
          <div className="about-direction-icon"><DirectionIcon type="systems" /></div>
          <div><h3>Системы<br />пожарной защиты</h3><p>Осуществляем тестирование и сертификацию систем пожарной защиты, включая детекторы дыма, автоматические пожарные системы и прочие устройства.</p></div>
        </article>
        <article className="about-direction">
          <div className="about-direction-icon"><DirectionIcon type="research" /></div>
          <div><h3>Исследования<br />и разработки</h3><p>Проводим исследования и разработки новых методов и технологий для повышения уровня пожарной защиты.</p></div>
        </article>
      </div>
    </section>
  );
}
