import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from './Container/Container';
export default function Header() {
  return <header className="header"><Container className="header-inner">
    <Link className="brand" to="/" aria-label="Роспожтест — главная"><span className="brand-mark">РОС<br/>ПОЖ<br/>ТЕСТ</span><span className="brand-text"><strong>РОСПОЖТЕСТ</strong><small>ИСПЫТАТЕЛЬНАЯ<br/>ПОЖАРНАЯ ЛАБОРАТОРИЯ</small></span></Link>
    <nav className="navigation" aria-label="Основная навигация">{[['/','Главная'],['/services','Услуги'],['/about','О нас'],['/contacts','Контакты']].map(([to,label]) => <NavLink key={to} to={to} end={to==='/'} className={({isActive})=>`nav-link${isActive?' active':''}`}>{label}</NavLink>)}</nav>
    <a className="header-phone" href="tel:+74952696320">8 (495) 269-63-20<small>Пн–Пт · 10:00–19:00</small></a>
    <a className="button header-cta" href="mailto:info@rospojtest.ru">Оставить заявку <span>↗</span></a>
  </Container></header>;
}
