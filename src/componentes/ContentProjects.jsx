import React from 'react';
import '../style/Projects.css';
import projeto1 from '../assets/projeto1.svg';
import projeto2 from '../assets/projeto2.svg';
import projeto3 from '../assets/projeto3.svg';

export default function Projects() {
  const flipCard = (event) => {
    const card = event.target.closest('.card');

    if (card.classList.contains('flipped')) {
      card.classList.remove('flipped');
    } else {
      card.classList.add('flipped');
    }
  };

  return (
    <>
      <h2 className='Name-module'>Projetos Front-end</h2>
      <div className="projects-container">
        <div className="card" id="card1" onClick={flipCard}>
          <div className="card-front">
            <img src={projeto1} alt="Imagem do Projeto 1" />
            <h2 className="card-title">Shopping Cart</h2>
            <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end durante o curso na escola Trybe. Mais detalhes no verso </h3>
            <h4 className="card-subtitle">Sobre o projeto disponível no github.</h4>
            <ul className='social_github'>
              <li>
                <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
                <p className='git-link'>Github</p> 
                </a>
              </li>
            </ul>
          </div>
          <div className="card-back">
            <h3 className="card-subtitle">Foi implementado um carrinho de compras totalmente dinâmico, consumindo dados diretamente de uma API do Mercado Livre. Onde o usuário pode adicionar e remover itens do carrinho. Também foi adicionado a função para buscar o endereço pelo cep, consumindo API da brasilapi.com.br.</h3>
            <h4 className="card-subtitle">Esse projeto foi desenvolvido com as tecnologias seguintes tecnologias:</h4>
            <ul className="card-list">
              <li>Javascript</li>
              <li>Vite</li>
              <li>Css</li>
              <li>EsLint</li>
              <li>StyleLint</li>
              <li>Jest</li>
            </ul>
            <div className='link-projeto'>
              <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Link Projeto Shopping Cart</a></div>
          </div>
        </div>

        <div className="card" id="card2" onClick={flipCard}>
          <div className="card-front">
            <img src={projeto2} alt="Imagem do Projeto 2" />
            <h2 className="card-title">Solar System</h2>
            <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end durante o curso na escola Trybe. Mais detalhes no verso </h3>
            <h4 className="card-subtitle">Sobre o projeto disponível no github.</h4>
            <ul className='social_github'>
              <li className='link_github'>
                <a href='https://github.com/jacksonsouzasantos/Solar-System' target="blank" data-testid='github-icon' >
                 <p className='git-link'>Github</p> 
                </a>
              </li>
            </ul>
          </div>
          <div className="card-back">
            <h3 className="card-subtitle">A proposta foi desenvolver um aplicação que exibe-se o sistema solar e as viagens espaciais utilizando o React. Além de visualizar os planetas do sistema solar. Também exibe cards com as informações sobre missões espaciais.</h3>
            <h4 className="card-subtitle">Esse projeto foi desenvolvido com as tecnologias seguintes tecnologias:</h4>
            <ul className="card-list">
              <li>Javascript</li>
              <li>Reactjs</li>
              <li>Css3</li>
              <li>EsLint</li>
              <li>Jest</li>
              <li>StyleLint</li>
            </ul>
            <div className='link-projeto'>
              <a href="https://solar-system-eta.vercel.app/" className="card-link" target='blank'>Link Projeto Solar System</a></div>
          </div>
        </div>


        <div className="card" id="card3" onClick={flipCard}>
          <div className="card-front">
            <img src={projeto3} alt="Imagem do Projeto 3" />
            <h2 className="card-title">Music Tunes</h2>
            <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end durante o curso na escola Trybe. Mais detalhes no verso </h3>
            <h4 className="card-subtitle">Sobre o projeto disponível no github.</h4>
            <ul className='social_github'>
              <li>
                <a href='https://github.com/jacksonsouzasantos/musicTunes' target="blank" data-testid='github-icon'>
                <p className='git-link'>Github</p> 
                </a>
              </li>
            </ul>
          </div>
          <div className="card-back">
            <h3 className="card-subtitle">Foi desenvolvido aplicação para pesquisar e listar álbuns e músicas. Será possível  ouvir o preview de cada música. Além disso, você também poderá favoritar suas músicas preferidas. Aprendizado sobre Ciclo de Vida de Componentes e React Route</h3>
            <h4 className="card-subtitle">Tecnologias utilizadas:</h4>
            <ul className="card-list">
              <li>React</li>
              <li>JavaScript</li>
              <li>React Router</li>
              <li>Css3</li>
              <li>EsLint/StyleLint</li>
              <li>testingLibrary</li>
            </ul>
            <div className='link-projeto'>
              <a href="https://music-tunes-iota.vercel.app/" className="card-link" target='blank'>Link Projeto Music Tunes</a></div>
          </div>
        </div>
       </div>
         <h2>____________________________</h2>
      </>
  );
}