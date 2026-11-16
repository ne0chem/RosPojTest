import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import ScrollToTop from '../components/ScrollToTop';

export default function Layout() {
  const { pathname } = useLocation();
  const isLegalPage = ['/privacy-policy', '/personal-data-consent'].includes(pathname);
  return (
    <div className="layout">
      <ScrollToTop />
      <a className="skip-link" href="#main">К содержимому</a>
      <Header />
      <Container as="main" id="main" className="main">
        <Outlet />
        {!isLegalPage && <ContactForm />}
      </Container>
      <Footer />
    </div>
  );
}
