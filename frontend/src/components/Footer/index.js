import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import messageImg from '../../assets/message.png';
import personaldataImg from '../../assets/personal-data.png';
import statsImg from '../../assets/stats.png';

export default function Footer(){
  return (
    <footer>
      <ul>
        <li>
          <Link to="/messages">
            <img src={messageImg} alt="Mensagens"/>
            <p>Mensagens</p>
          </Link>
        </li>
        <li>
          <Link to="/personal-data">
            <img src={personaldataImg} alt="Dados Pessoais"/>
            <p>Dados pessoais</p>
          </Link>
        </li>
        <li>
          <Link to="/stats">
            <img src={statsImg} alt="Estatísticas"/>
            <p>Estatísticas</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}