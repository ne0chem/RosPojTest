import React, { useId } from 'react';
import './RiskAssessment.css';
import shieldImage from '../../assets/risk/fire-risk-shield.png';
import buildingImage from '../../assets/risk/building.png';
import alarmImage from '../../assets/risk/alarm.png';

const benefits = [['shield', 'Оценка соответствия требованиям'], ['chart', 'Анализ рисков'], ['check', 'Разработка рекомендаций'], ['verified', 'Повышение уровня пожарной безопасности']];
function BenefitIcon({ type }) {
  return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === 'chart' ? <path d="M6 33h28M9 29V22h4v7m5 0V15h4v14m5 0V7h4v22" /> : type === 'check' ? <><rect x="6" y="5" width="28" height="30" rx="3" /><path d="m13 20 5 5 10-12" /></> : <><path d="M20 4c5 4 10 5 14 5v11c0 8-7 14-14 17C13 34 6 28 6 20V9c4 0 9-1 14-5Z" />{type === 'verified' && <path d="m14 20 4 4 8-9" />}</>}
  </svg>;
}
export default function RiskAssessment() {
  const titleId = useId();
  return <section className="risk-assessment" aria-labelledby={titleId}>
    <div className="risk-assessment-hero">
      <div className="risk-assessment-copy">
        <h2 id={titleId}>Независимая оценка<br />пожарного риска</h2>
        <p className="risk-assessment-intro">Независимая оценка пожарного риска (НОР), также называемая аудитом пожарной безопасности, — это <strong>процедура оценки соответствия объекта требованиям пожарной безопасности, проводимая независимой экспертной организацией по заказу собственника объекта защиты</strong>. Это важный инструмент, который помогает обеспечить безопасность и защиту жизни людей и имущества от пожаров. Процедура выполняется специалистами, обладающими высоким уровнем знаний и квалификации в области пожарной безопасности.</p>
      </div>
      <div className="risk-assessment-art" aria-hidden="true"><svg className="risk-assessment-ribbon" viewBox="0 0 1000 400" preserveAspectRatio="none"><defs><linearGradient id={`${titleId}-ribbon`} x1="0" y1="0" x2="0.85" y2="1"><stop stopColor="#dcb4bd" stopOpacity="0" /><stop offset="0.48" stopColor="#c17c89" /><stop offset="0.73" stopColor="#981e30" /><stop offset="1" stopColor="#e9b6be" /></linearGradient></defs><path d="M0 385C310 210 650 245 1000 70L1000 180C650 310 310 270 0 395Z" fill={`url(#${titleId}-ribbon)`} stroke="white" strokeWidth="2" /><path d="M50 300C370 90 750 130 1000 0M100 220C390 20 690 15 800 0" stroke="white" strokeOpacity="0.65" strokeWidth="2" fill="none" /></svg><img src={shieldImage} alt="" width="1536" height="1024" /></div>
    </div>
    <ul className="risk-assessment-benefits">{benefits.map(([type, label]) => <li key={type}><span className="risk-assessment-icon"><BenefitIcon type={type} /></span><span>{label}</span></li>)}</ul>
    <div className="risk-assessment-details">
      <article className="risk-assessment-card">
        <div className="risk-assessment-photo risk-assessment-photo-building"><img src={buildingImage} alt="Фасад современного здания" loading="lazy" /></div>
        <p><strong>В процессе независимой оценки пожарного риска проводится анализ всех возможных источников пожара и определяются факторы риска,</strong> которые могут способствовать его возникновению. Это включает оценку состояния электропроводки, наличия горючих материалов, системы пожаротушения, эвакуационных планов и других важных аспектов обеспечения пожарной безопасности.</p>
      </article>
      <article className="risk-assessment-card">
        <div className="risk-assessment-photo"><img src={alarmImage} alt="Красный ручной пожарный извещатель" loading="lazy" /></div>
        <p><strong>На основе полученных данных и результатов исследования специалисты разрабатывают рекомендации</strong> по улучшению мер, направленных на обеспечение пожарной безопасности. Это может включать установку и монтаж пожарной сигнализации, обучение сотрудников правилам эвакуации, размещение дополнительного оборудования для тушения возгорания, а также иные меры.</p>
      </article>
    </div>
  </section>;
}
