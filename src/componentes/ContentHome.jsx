import React from 'react';
import TypeWrite from './typeWrite';
import '../style/Home.css';
import Footer from './Footer';



export default function ContentHome() {
  return (
    <>
    <Footer />
    <div className="home">
        <div className="content">
          <div className="text">
            <TypeWrite className="write" texto="Bem-vindo ao meu portfólio" />
            <p>Eu sou um desenvolvedor de aplicativos web apaixonado por criar soluções criativas para problemas complexos.</p>
          </div>
        </div>
      </div></>
  );
}

