import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/Logo-platzi-video.png'
import userIcon from '../assets/static/user2.png'

const Header = () => (
  <header className='header'>
    <a href='index.html'>
      <img src={logo} alt='Logo Platzi video' className='header-logo' />
    </a>
    <div className='header-menu'>
      <nav className="header-menu_profile">
        <img src={userIcon} alt="user" className="Header-menu_userlogo" />
        <p>perfil</p>
        <ul>
          <li><a href="Login.html">Cuenta</a></li>
          <li><a href="index.html">Cerrar sesion</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
