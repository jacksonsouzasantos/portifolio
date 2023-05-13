import React from 'react';
import NavBar from '../componentes/NavBar';
import ContentAbout from '../componentes/ContentAbout';
import SlideCards from '../componentes/SlideCards';
import Footer from '../componentes/Footer';


export default function About() {
  return (

    <>
      <NavBar />
      <ContentAbout />
      <SlideCards />
      <Footer />
    </>
  );
}