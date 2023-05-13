import React from 'react';
import '../style/About.css';
import perfil from '../assets/perfil.png';


export default function About() {
  return (

    <>
      <div className="about-container">
        <img src={perfil} alt="Minha Foto" className="about-img" />
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>Meu nome é Jackson e sou um desenvolvedor de software para web apaixonado por tecnologia e inovação. Além do mundo da programação, sou um amante de esportes como slackline e musculação, que me mantêm em forma e em sintonia com minha rotina de trabalho. Além disso, minha paixão pela cozinha e fermentação de alimentos e bebidas me torna um cozinheiro habilidoso e curioso, sempre experimentando novas receitas e técnicas para descobrir novos sabores e aromas.</p>
          <p>Mas, acima de tudo, sou uma pessoa que adora aprender e enfrentar desafios. Estou sempre procurando expandir meus conhecimentos e habilidades em diferentes áreas, seja através de cursos on-line, livros ou workshops. E, quando se trata de desafios, eu os abraço com confiança e coragem, sempre procurando maneiras criativas de superá-los.</p>
          <p>O que realmente me diferencia é minha habilidade de aprender rapidamente e me adaptar a novas situações, tornando-me versátil e eficaz em qualquer ambiente de trabalho.</p>
        </div>
      </div>
    </>
  );
}