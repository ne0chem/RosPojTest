import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Layout() {
  return (
    <div className="layout">
      <a className="skip-link" href="#main">К содержимому</a>
      <Header />
      <Container as="main" id="main" className="main">
        <Outlet />
        <ContactForm />
      </Container>
      <Footer />
    </div>
  );
}
