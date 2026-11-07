import React, { useState } from 'react';
import Icon from '../Icon';
import PrivacyConsent from '../PrivacyConsent/PrivacyConsent';
import './ContactForm.css';

function FieldIcon({ name }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'person' ? <><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2Z"/></> : <path d="M4 4h16v13H9l-5 4Z"/>}
  </svg>;
}

export default function ContactForm({ policyUrl }) {
  const [notice, setNotice] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name').trim();
    const phone = data.get('phone').trim();
    const comment = data.get('comment').trim();
    const body = `Имя: ${name}\nТелефон: ${phone}\n\nКомментарий:\n${comment || 'Не указан'}`;
    window.location.href = `mailto:info@rospojtest.ru?subject=${encodeURIComponent('Заявка с сайта РОСПОЖТЕСТ')}&body=${encodeURIComponent(body)}`;
    setNotice('Письмо подготовлено для отправки в вашей почтовой программе. Если она не открылась, позвоните нам или напишите на info@rospojtest.ru.');
  }

  return (
    <section id="contact-form" className="contact-section" aria-labelledby="contact-form-title">
      <div className="contact-section-copy">
        <h2 id="contact-form-title">Свяжитесь <span>с нами</span></h2>
        <p className="contact-section-description">Оставьте заявку — наши специалисты свяжутся с вами в ближайшее время и проконсультируют по всем вопросам.</p>
        <div className="contact-section-links">
          <a href="tel:+74952696320"><span className="contact-section-icon"><Icon name="phone" /></span><span>8 (495) 269-63-20</span></a>
          <a href="mailto:info@rospojtest.ru"><span className="contact-section-icon"><Icon name="mail" /></span><span>info@rospojtest.ru</span></a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-form-field">
          <span className="contact-form-label">Ваше имя</span>
          <FieldIcon name="person" />
          <input name="name" type="text" autoComplete="name" placeholder="Ваше имя" required maxLength={100} pattern=".*\S.*" />
        </label>
        <label className="contact-form-field">
          <span className="contact-form-label">Номер телефона</span>
          <Icon name="phone" />
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Номер телефона" required maxLength={30}
            onChange={(event) => {
              const digits = event.target.value.replace(/\D/g, '');
              const valid = /^[+\d\s()\-]+$/.test(event.target.value) && digits.length >= 10 && digits.length <= 15;
              event.target.setCustomValidity(valid ? '' : 'Укажите номер телефона: от 10 до 15 цифр.');
            }} />
        </label>
        <label className="contact-form-field contact-form-field--comment">
          <span className="contact-form-label">Комментарий</span>
          <FieldIcon name="comment" />
          <textarea name="comment" placeholder="Комментарий" rows={4} maxLength={2000} />
        </label>
        <button className="button contact-form-submit" type="submit">Отправить заявку</button>
        <PrivacyConsent policyUrl={policyUrl} />
        <p className="contact-form-status" role="status">{notice}</p>
      </form>
    </section>
  );
}
