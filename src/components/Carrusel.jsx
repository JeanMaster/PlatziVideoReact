import React from 'react';
import '../assets/styles/components/Carrusel.scss'

const Carrusel = ({ children }) => (
    <section className="carrusel">
            <div className="carrusel-container">
                {children}
            </div>
    </section>
)

export default Carrusel;
