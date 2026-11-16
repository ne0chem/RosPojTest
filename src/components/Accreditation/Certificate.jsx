import React from 'react';
import './Accreditation.css';

export default function Certificate() {
  const documentUrl = '/documents/rospozhtest-accreditation.pdf';
  return (
    <div className="certificate-card">
      <div className="certificate-copy">
        <h3>Свидетельство об аккредитации испытательной лаборатории</h3>
        <p>Испытательная лаборатория «РосПожТест» аккредитована в системе добровольной сертификации Национального испытательного центра в области пожарной безопасности «РосПожТест».</p>
        <dl>
          <div><dt>Номер свидетельства</dt><dd>НИЦПБ.РПТ/77.RU.ИЛ.001/23</dd></div>
          <div><dt>Дата выдачи</dt><dd><time dateTime="2022-11-24">24 ноября 2022 года</time></dd></div>
        </dl>
        <a className="button certificate-open" href={documentUrl} target="_blank" rel="noopener noreferrer">Открыть свидетельство <span aria-hidden="true">↗</span></a>
        <span className="certificate-file-note">PDF · 2 страницы · с областью аккредитации</span>
      </div>
      <a className="certificate-preview" href={documentUrl} target="_blank" rel="noopener noreferrer" aria-label="Посмотреть свидетельство об аккредитации и приложение в PDF (в новой вкладке)">
        <img src="/documents/rospozhtest-accreditation.webp" width="1432" height="1012" alt="Скан свидетельства об аккредитации лаборатории РосПожТест № НИЦПБ.РПТ/77.RU.ИЛ.001/23 от 24 ноября 2022 года" loading="lazy" />
        <span>Свидетельство и приложение <span aria-hidden="true">↗</span></span>
      </a>
    </div>
  );
}
