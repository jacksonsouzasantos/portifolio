import React from 'react';
import NavBar from '../componentes/NavBar';
import Footer from '../componentes/Footer';
import ContentSkills from '../componentes/ContentSkills';
import ShuffedCards from '../componentes/ShuffledCards';

export default function Skills() {
  return (
    <>
      <NavBar />
      <ContentSkills />
      <ShuffedCards />
      <Footer />
    </>
  )
}
