import React from 'react';
import { FaGithub } from "react-icons/fa";
import '../style/Projects.css';
import projeto1 from '../assets/projeto1.png';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="card">
        <img src={projeto1} alt="Imagem do Projeto 1" />
        <h2 className="card-title">Shopping Cart</h2>
        <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end no curso da Trybe. Desenvolvido com as tecnologias</h3>
        <ul className="card-list">
          <li>Javascript</li>
          <li>Vite</li>
          <li>Css</li>
          <li>EsLint</li>
          <li>StyleLint</li>
          <li>Jest</li>
        </ul>
        <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Projeto Shopping Cart link</a>
        <h5 className="card-subtitle">Sobre o desenvolvimento</h5>
        <ul className='social_list'>
          <li>
            <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <img src={projeto1} alt="Imagem do Projeto 1" />
        <h2 className="card-title">Shopping Cart</h2>
        <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end no curso da Trybe. Desenvolvido com as tecnologias</h3>
        <ul className="card-list">
          <li>Javascript</li>
          <li>Vite</li>
          <li>Css</li>
          <li>EsLint</li>
          <li>StyleLint</li>
          <li>Jest</li>
        </ul>
        <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Projeto Shopping Cart link</a>
        <h5 className="card-subtitle">Sobre o desenvolvimento</h5>
        <ul className='social_list'>
          <li>
            <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <img src={projeto1} alt="Imagem do Projeto 1" />
        <h2 className="card-title">Shopping Cart</h2>
        <h3 className="card-subtitle">Projeto desenvolvido no módulo de front end no curso da Trybe. Desenvolvido com as tecnologias</h3>
        <ul className="card-list">
          <li>Javascript</li>
          <li>Vite</li>
          <li>Css</li>
          <li>EsLint</li>
          <li>StyleLint</li>
          <li>Jest</li>
        </ul>
        <a href="https://shopping-cart-five-gamma.vercel.app/" className="card-link" target='blank'>Projeto Shopping Cart link</a>
        <h5 className="card-subtitle">Sobre o desenvolvimento</h5>
        <ul className='social_list'>
          <li>
            <a href='https://github.com/jacksonsouzasantos/shopping-cart' target="blank" data-testid='github-icon'>
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}