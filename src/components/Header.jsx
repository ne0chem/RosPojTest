import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from './Container/Container';
export default function Header() {
  const { pathname, hash } = useLocation();
  return <header className="header"><Container className="header-inner">
    <Link className="brand" to="/" aria-label="Роспожтест — главная"><span className="brand-mark">РОС<br/>ПОЖ<br/>ТЕСТ</span><span className="brand-text"><strong>РОСПОЖТЕСТ</strong><small>ИСПЫТАТЕЛЬНАЯ<br/>ПОЖАРНАЯ ЛАБОРАТОРИЯ</small></span></Link>
    <nav className="navigation" aria-label="Основная навигация">{[['/','Главная'],['/services','Услуги'],['/#about-company','О компании'],['/contacts','Контакты']].map(([to,label]) => to === '/#about-company'
      ? <a key={to} href={to} className={`nav-link${pathname === '/' && hash === '#about-company' ? ' active' : ''}`} aria-current={pathname === '/' && hash === '#about-company' ? 'location' : undefined}>{label}</a>
      : <NavLink key={to} to={to} end={to==='/'} className={({isActive})=>`nav-link${isActive && !(to === '/' && hash === '#about-company') ? ' active' : ''}`}>{label}</NavLink>)}</nav>
    <div className="header-actions">
      <a className="button header-cta" href="#contact-form">Оставить заявку</a>
    </div>
  </Container></header>;
}
