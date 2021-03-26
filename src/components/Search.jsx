import React from 'react';
import '../assets/styles/components/Search.scss'

const Search = () => (
    <section className="buscador">
        <h2 className="buscador-tittle">Que quieres ver hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..." />
        <button className="buton">Buscar</button>   
    </section>
)

export default Search;
