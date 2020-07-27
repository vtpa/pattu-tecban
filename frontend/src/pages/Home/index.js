import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Balance from '../../components/Balance';

import './styles.css';

import ico1Img from '../../assets/ico1.png'
import ico2Img from '../../assets/ico2.png'
import ico3Img from '../../assets/ico3.png'
import ico4Img from '../../assets/ico4.png'
import ico5Img from '../../assets/ico5.png'
import ico6Img from '../../assets/ico6.png'

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
                    <img src={ico2Img} alt="Icone Menu"/>
                    <h3>Estabelecimentos Próximos</h3>
                </div>
            </Link>

            <Link to="/map/atms">
                <div className="item-menu">
                    <img src={ico3Img} alt="Icone Menu"/>
                    <h3>Caixas Eletrônicos</h3>
                </div>
            </Link>

            <Link to="/map/agencies">
                <div className="item-menu">
                    <img src={ico4Img} alt="Icone Menu"/>
                    <h3>Agências bancárias</h3>
                </div>
            </Link>

            <Link to="history">
                <div className="item-menu">
                    <img src={ico5Img} alt="Icone Menu"/>
                    <h3>Histórico de consumo</h3>
                </div>
            </Link>

            <Link to="/withdraw">
                <div className="item-menu">
                    <img src={ico6Img} alt="Icone Menu"/>
                    <h3>Ordem de Pagamento Saque Digital</h3>
                </div>
            </Link>

        </div>
        <Footer />
        </>
    );
}