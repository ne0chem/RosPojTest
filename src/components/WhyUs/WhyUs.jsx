import React from 'react';
import './WhyUs.css';

const clientFocus = 'Коммерческие компании, стремясь удовлетворить потребности своих клиентов, часто предлагают индивидуальные решения и персонализированный подход. Они стараются создавать положительный опыт для своих клиентов и строить долгосрочные отношения.';

const reasons = [
  {
    icon: 'flexibility',
    title: 'Гибкость',
    text: 'Коммерческие компании имеют большую гибкость в принятии решений и адаптации к изменяющимся рыночным условиям. Они могут быстрее реагировать на требования клиентов и вносить изменения в свои продукты и услуги.',
  },
  { icon: 'care', title: 'Клиентоориентированность', text: clientFocus },
  {
    icon: 'efficiency',
    title: 'Эффективность',
    text: 'Коммерческие компании часто ориентированы на прибыль и стремятся к максимальной эффективности своей деятельности. Они применяют передовые методы управления, технологии и процессы, чтобы достичь оптимальных результатов.',
  },
  { icon: 'partnership', title: 'Клиентоориентированность', text: clientFocus },
];

function ReasonIcon({ name }) {
  const paths = {
    flexibility: <><path d="M11 16h29v7H18v7h27M17 9l-7 7 7 7m21 0 7 7-7 7" /></>,
    care: <><circle cx="28" cy="13" r="6"/><path d="M18 29v-3a10 10 0 0 1 20 0v3ZM23 48V38L12 27c-3-3-6 0-3 3l8 9M9 30V21c0-4-5-4-5 0v14l12 13m17 0V38l11-11c3-3 6 0 3 3l-8 9m8-9V21c0-4 5-4 5 0v14L40 48"/></>,
    efficiency: <><path d="M7 38h7v12H7Zm12-7h7v19h-7Zm12-6h7v25h-7Zm12-9h7v34h-7ZM7 29l13-7 9 2L49 5M39 5h10v10"/></>,
    partnership: <><circle cx="10" cy="12" r="4"/><circle cx="46" cy="12" r="4"/><path d="M7 48V34H4V23a6 6 0 0 1 12 0v11h-3v14Zm36 0V34h-3V23a6 6 0 0 1 12 0v11h-3v14ZM21 24h14m-4-4 4 4-4 4m4 8H21m4-4-4 4 4 4"/></>,
  };
  return <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function WhyUs({ imageSrc }) {
  return (
    <section className="why-us" aria-labelledby="why-us-title">
      <div className="why-us-heading">
        <h2 id="why-us-title">Причины работы <span>с нами</span></h2>
        {imageSrc && <img className="why-us-image" src={imageSrc} alt="" loading="lazy" />}
      </div>
      <ul className="why-us-list">
        {reasons.map(({ icon, title, text }) => (
          <li className="why-us-card" key={icon}>
            <div className="why-us-icon"><ReasonIcon name={icon} /></div>
            <div className="why-us-copy"><h3>{title}</h3><p>{text}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
