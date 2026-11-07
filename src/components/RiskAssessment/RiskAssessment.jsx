import React, { useId } from 'react';
import './RiskAssessment.css';

export default function RiskAssessment() {
  const titleId = useId();
  return (
    <section className="risk-assessment" aria-labelledby={titleId}>
      <h2 id={titleId}>Независимая оценка пожарного риска</h2>
      <div className="risk-assessment-intro">
        <p>Независимая оценка пожарного риска — это важный инструмент, который помогает обеспечить безопасность и защиту жизней и имущества от пожаров. Эта процедура выполняется специалистами, обладающими высоким уровнем экспертизы в области пожарной безопасности.</p>
        <div className="risk-assessment-art" aria-hidden="true">
          <svg viewBox="0 0 240 210" fill="none">
            <rect x="53" y="25" width="127" height="166" rx="14" fill="#dce5f0" transform="rotate(-8 53 25)" />
            <rect x="62" y="15" width="127" height="166" rx="14" fill="#fafcfe" stroke="#bdcbdc" />
            <path d="M85 47h66M85 62h45M106 89h48M106 111h48M106 133h29" stroke="#9bafc6" strokeWidth="5" strokeLinecap="round" />
            <path d="m83 88 4 4 8-9m-12 27 4 4 8-9m-12 27 4 4 8-9" stroke="#536f90" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m177 108 36 13v28c0 22-19 38-36 46-17-8-36-24-36-46v-28l36-13Z" fill="#e8eff7" stroke="#7e96b2" strokeWidth="2" />
            <path d="m161 151 11 11 22-25" stroke="#c93840" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="risk-assessment-details">
        <div className="risk-assessment-card">
          <p>В процессе независимой оценки проводится анализ всех возможных источников пожара и определяются факторы риска, которые могут способствовать его возникновению. Это включает оценку состояния электропроводки, наличия горючих материалов, системы пожаротушения, эвакуационных планов и других важных аспектов.</p>
        </div>
        <div className="risk-assessment-card">
          <p>На основе полученных данных специалисты разрабатывают рекомендации по улучшению пожарной безопасности. Это может включать установку сигнализации, обучение сотрудников правилам эвакуации, дополнительное оборудование для тушения возгорания и другие меры.</p>
        </div>
      </div>
    </section>
  );
}
