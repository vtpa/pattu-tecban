import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Balance from '../../components/Balance';

import './styles.css';

import ico1Img from '../../assets/ico1.png'

export default function Home() {

    return (
        <>
        <Header />
        <Balance />
        <div className="home-container">
            <Link to="/bills">
                <div className="item-menu">
                    <img src={ico1Img} alt="Icone Menu"/>
                    <h3>Contas a pagar</h3>
                </div>
            </Link>

            <Link to="/map/near">
                <div className="item-menu">
                    <img src={ico1Img} alt="Icone Menu"/>
                    <h3>Estabelecimentos Próximos</h3>
                </div>
            </Link>

            <Link to="/map/atms">
                <div className="item-menu">
                    <img src={ico1Img} alt="Icone Menu"/>
                    <h3>Caixas Eletrônicos</h3>
                </div>
            </Link>

            <Link to="/map/agencies">
                <div className="item-menu">
                    <img src={ico1Img} alt="Icone Menu"/>
                    <h3>Agências bancárias</h3>
                </div>
            </Link>

            <Link to="history">
                <div className="item-menu">
                    <img src={ico1Img} alt="Icone Menu"/>
                    <h3>Histórico de consumo</h3>
                </div>
            </Link>

            <Link to="/withdraw">
                <div className="item-menu">
                    <img src={ico1Img} alt="Icone Menu"/>
                    <h3>Ordem de Pagamento Saque Digital</h3>
                </div>
            </Link>

        </div>
        <Footer />
        </>
    );
}