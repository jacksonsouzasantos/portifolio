import React from 'react';
import NavBar from '../componentes/NavBar';
import '../style/About.css';
import Footer from '../componentes/Footer';
import mypicture from '../assets/mypicture.jpg';


export default function About() {
return (
  
    <>
    <NavBar /><Footer /><div className="about-container">
      <img src={mypicture} alt="Minha Foto" className="about-img" />
      <div className="about-text">
        <h2>Sobre Mim</h2>
        <p>Meu nome é [seu nome], sou [descrição breve sobre você, por exemplo: estudante de programação, apaixonado por tecnologia].</p>
        <p>Eu adoro aprender novas coisas e estou sempre em busca de desafios.</p>
      </div>
    </div></>
);
}