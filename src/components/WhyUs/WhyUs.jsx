import React from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: 'certificate',
    title: 'Официальное подтверждение компетентности.',
    text: 'Наша лаборатория прошла аккредитацию в СДС «РосПожТест», что подтверждает наличие необходимого оборудования и квалификации для проведения испытаний.',
  },
  {
    icon: 'equipment',
    title: 'Современная приборная база.',
    text: 'Используем средства измерения и оборудование, прошедшие поверку, что обеспечивает точность результатов.',
  },
  {
    icon: 'standards',
    title: 'Работаем по стандартам.',
    text: 'Все испытания проводятся в строгом соответствии с действующими ГОСТами и методиками.',
  },
  {
    icon: 'team',
    title: 'Опытная команда.',
    text: 'Наши специалисты обладают глубокими знаниями в области пожарной безопасности и помогут разобраться в сложных вопросах.',
  },
];

function ReasonIcon({ name }) {
  const paths = {
    certificate: <><path d="M30 5H12a3 3 0 0 0-3 3v40a3 3 0 0 0 3 3h17M30 5v13h13L30 5ZM43 18v8M17 26h13M17 34h8"/><circle cx="39" cy="37" r="9"/><path d="m35 37 3 3 5-6m-9 11-3 9 8-4 8 4-3-9"/></>,
    equipment: <><rect x="9" y="5" width="30" height="45" rx="5"/><path d="M15 12h18v15H15ZM19 39h10M24 34v10M39 41h5a5 5 0 0 0 5-5V21M46 14h6v7h-6Z"/><path d="m18 22 4-5 4 3 4-5"/></>,
    standards: <><path d="M19 9h-7a3 3 0 0 0-3 3v36a3 3 0 0 0 3 3h31a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-7M20 5h15v10H20ZM29 24h10M29 34h10M29 44h10m-13-21-5 5-3-3m8 8-5 5-3-3m8 8-5 5-3-3"/></>,
    team: <><circle cx="28" cy="15" r="7"/><circle cx="10" cy="21" r="5"/><circle cx="46" cy="21" r="5"/><path d="M17 49V37a11 11 0 0 1 22 0v12H17ZM4 46V36a6 6 0 0 1 10-4m38 14V36a6 6 0 0 0-10-4M23 37v7m10-7v7"/></>,
  };
  return <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function WhyUs({ imageSrc }) {
  return (
    <section className="why-us" aria-labelledby="why-us-title">
      <div className="why-us-heading">
        <h2 id="why-us-title">Почему <span>выбирают нас</span></h2>
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
