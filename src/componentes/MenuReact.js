import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import './css/MenuReact.css'
import Ahorcado from './imagenes/Ahorcado.png';
import PPT from './imagenes/PPT.png';
import Wordle from './imagenes/Wordle.png'

function MenuReact(){
    return(
        <Fragment>
            <div className='caja'>
                <div className='cajajuego'>
                    <div className='portadajuego'>
                        <img src={PPT} alt='No hay presupuesto para imagen :(' className='imagenjuego'/>
                    </div>
                    <div className='infojuego'>
                        <h1 className='titulojuego'>
                            PIEDRA, PAPEL O TIJERA
                        </h1>
                    <div className='sipnosis'>
                        <p className='t'>Elige entre las opciones para poder ganarle a la maquina.</p>
                        <p className='t'>Como dice el nombre tienes opciones para ganar.</p>
                        <p className='t'>¡Entra y vence la maquina!</p>
                    </div>
                        <Link to='/juegoppt'>
                            <h3 className='botonjugar'>
                                ¡CLICK AQUI PARA JUGAR! ➤
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MenuReact;