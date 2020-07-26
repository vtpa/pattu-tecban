import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo-pattu.png';

import './styles.css';

export default function Header(){
  return (
    <nav>
      <ul>
      <li id="menu"></li>
      <li><Link className="link-home" to="/"><img src={logoImg} alt="Pattu" /></Link></li>
      <li id="logout"></li>
      </ul>
    </nav>
  );
}