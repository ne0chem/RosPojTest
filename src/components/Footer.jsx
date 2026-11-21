import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-main">
      <div className="footer-brand">
        <Link to="/" aria-label="Роспожтест — главная"><img src="/images/logo.png" width="129" height="89" alt="РОСПОЖТЕСТ" /></Link>
        <p>Испытательная пожарная лаборатория</p>
        <span>Испытания, исследования и экспертиза в области пожарной безопасности.</span>
      </div>
      <nav className="footer-nav" aria-label="Навигация в подвале">
        <h2>Разделы сайта</h2>
        <Link to="/">Главная</Link><Link to="/services">Услуги лаборатории</Link>
        <Link to="/#about-company">О компании</Link><Link to="/contacts">Контакты</Link>
      </nav>
      <div className="footer-contacts">
        <h2>Свяжитесь с нами</h2>
        <a className="footer-phone" href="tel:+74952696320">8 (495) 269-63-20</a>
        <a href="mailto:info@rospojtest.ru">info@rospojtest.ru</a>
        <address>г. Москва, ул. 2-я Синичкина,<br />д. 9А, стр. 3</address>
        <span>Пн–Пт · 10:00–19:00</span>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} РОСПОЖТЕСТ</span>
      <Link to="/privacy-policy">Политика конфиденциальности</Link>
      <Link to="/personal-data-consent">Согласие на обработку данных</Link>
    </div>
  </div></footer>;
}
