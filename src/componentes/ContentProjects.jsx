import React from 'react';
import { FaGithub } from "react-icons/fa";
import '../style/Projects.css';
import projeto1 from '../assets/projeto1.svg';

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
      <div className="projects-container">

        <div className="card" id="card1" onClick={flipCard}>
          <div className="card-front">
            <img src={projeto1} alt="Imagem do Projeto 1" />
            <h2 className="card-title">Shopping Cart</h2>
            <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end durante o curso na escola Trybe. Mais detalhes no verso </h3>
            <h4 className="card-subtitle">Código do projeto disponível no github.</h4>
            <ul className='social_github'>
              <li>
                <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
                  <FaGithub />
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
            <div className="card-subtitle">
              <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Link Projeto Shopping Cart</a></div>
          </div>
        </div>

        <div className="card" id="card2" onClick={flipCard}>
          <div className="card-front">
            <img src={projeto1} alt="Imagem do Projeto 2" />
            <h2 className="card-title">Shopping Cart</h2>
            <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end durante o curso na escola Trybe. Mais detalhes no verso </h3>
            <h4 className="card-subtitle">Código do projeto disponível no github.</h4>
            <ul className='social_github'>
              <li>
                <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
                  <FaGithub />
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
            <div className="card-subtitle">
              <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Link Projeto Shopping Cart</a></div>
          </div>
        </div>


        <div className="card" id="card3" onClick={flipCard}>
          <div className="card-front">
            <img src={projeto1} alt="Imagem do Projeto 3" />
            <h2 className="card-title">Shopping Cart</h2>
            <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end durante o curso na escola Trybe. Mais detalhes no verso </h3>
            <h4 className="card-subtitle">Código do projeto disponível no github.</h4>
            <ul className='social_github'>
              <li>
                <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
                  <FaGithub />
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
            <div className="card-subtitle">
              <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Link Projeto Shopping Cart</a></div>
          </div>
        </div>
      </div></>
  );
}
