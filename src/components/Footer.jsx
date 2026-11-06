import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer(){return <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} РОСПОЖТЕСТ</span><span>Испытательная пожарная лаборатория</span><Link to="/contacts">Контакты ↗</Link></div></footer>;}
