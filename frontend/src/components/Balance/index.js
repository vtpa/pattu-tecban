import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import showBalanceImg from '../../assets/show-balance.png';
import hideBalanceImg from '../../assets/hide-balance.png';

import searchImg from '../../assets/search.png';
import notificationsImg from '../../assets/notifications.png';
import menuImg from '../../assets/menu.png';

export default function Balance(){
  const [showBalance, setShowBalance] = useState(false);
  return (
    <section>
      <ul>
        <li id="balance">
          {!showBalance ?
            <div>
              <p>Mostrar Saldo</p>
              <button onClick={() => {setShowBalance(!showBalance)}}><img src={showBalanceImg} alt="Mostrar Saldo" /></button>
            </div>
          : 
            <div>
              <p>R$ 50,00</p>
              <button onClick={() => {setShowBalance(!showBalance)}}><img src={hideBalanceImg} alt="Ocultar Saldo" /></button>
            </div>
          }

        </li>
        <li>
          <Link to="/search">
            <img src={searchImg} alt="Buscar"/>
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <img src={notificationsImg} alt="Notificações"/>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={menuImg} alt="Menu"/>
          </Link>
        </li>
      </ul>
    </section>
  );
}