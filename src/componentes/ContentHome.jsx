import React from 'react';
import TypeWrite from './typeWrite';
import '../style/Home.css';

export default function ContentHome() {
  return (
    <div className="home">
      <div className="video-background">
        <video autoPlay muted loop className="video">
          <source src="src/assets/backgroundclould.mp4" type="video/mp4" />
          <source src="src/assets/backgroundclould.webm" type="video/webm" />
        </video>
      </div>
      <div className="content">
        <div className="text">
          <TypeWrite className="write" texto="Bem-vindo ao meu portfólio" />
          <p>Eu sou um desenvolvedor de aplicativos web apaixonado por criar soluções criativas para problemas complexos.</p>
        </div>
      </div>
    </div>
  );
}
