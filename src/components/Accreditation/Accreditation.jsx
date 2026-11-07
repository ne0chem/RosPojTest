import React, { useId } from 'react';
import { accreditationDescription } from '../../data/accreditation';
import './Accreditation.css';

export default function Accreditation() {
  const titleId = useId();
  return (
    <section className="accreditation" aria-labelledby={titleId}>
      <h2 id={titleId}>Аккредитация испытательных пожарных лабораторий и экспертов</h2>
      <div className="accreditation-certificate">
        <div className="accreditation-certificate-details">
          <div className="accreditation-document-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 4H8a2 2 0 0 0-2 2v22h20V11L19 4Z M19 4v8h7M11 17h10M11 22h6" /></svg>
          </div>
          <h3>СВИДЕТЕЛЬСТВО № РОСС RU.32733.04ПЖО</h3>
          <dl>
            <div><dt>Состояние системы</dt><dd>Действующий</dd></div>
            <div><dt>Регистрационный номер</dt><dd>РОСС RU.32733.04ПЖО</dd></div>
            <div><dt>Дата регистрации</dt><dd>24.11.2022</dd></div>
          </dl>
        </div>
        <div className="accreditation-certificate-scope">
          <p>Объектами системы добровольной сертификации Национальный испытательный центр в области пожарной безопасности «РосПожТест» являются продукция, услуги, эксперты систем противопожарной защиты, испытательные лаборатории.</p>
        </div>
      </div>
      <div className="accreditation-description">
        {accreditationDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
