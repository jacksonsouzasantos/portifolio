import React from 'react';
import TypeWrite from './typeWrite';
import '../style/Home.css';
import Footer from './Footer';

function ContentHome() {
  return (
    <>
      <div className="home">
        <div className="content">
          <div className="text">
            <TypeWrite className="write" texto="Olá tudo bem? Esse é o meu portfólio"  />
            <p data-testid="welcome-text" >Eu sou um desenvolvedor de aplicativos web <br/> apaixonado por criar soluções criativas para problemas complexos.</p>
          </div>
        </div>
      <Footer />
      </div></>
  );
}

export default ContentHome;