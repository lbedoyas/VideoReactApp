import React from 'react';
import '../assets/styles/components/Carrousel.scss';

const Carrousel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container' />
    {children}
  </section>
);

export default Carrousel;
