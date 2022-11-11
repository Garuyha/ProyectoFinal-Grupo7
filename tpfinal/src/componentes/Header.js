import React from 'react'
import { Link } from "react-router-dom";
import './css/Header.css'
import Logo from './imagenes/Mate.png'


function Header(){
    return(
    <body>
        <header>
            <div className='containertwo'>
                <div className='logo'>
                    <img src={Logo} alt='Nohay' className='mate'/>
                    <div className='titulo'>MATE CEBADO  ENTERTAINMENT</div>
                </div>
            </div>
            <div className='container'>
                <div className='navbar'>
                    <Link to='/'><button className='categoria'> INICIO </button></Link>
                    <Link to="/juegoarkaoid"><button className='categoria'> JUEGOS PHASER </button></Link>
                    <Link to='/menureact'><button className='categoria'> JUEGOS REACT </button></Link>
                    <Link to='/desarrollador'><button className='categoria'> DESARROLLADORES </button></Link>
                </div>
            </div>
        </header>
    </body>
    )
  }
  export default Header;
  