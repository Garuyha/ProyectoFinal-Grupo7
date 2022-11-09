import React, { Fragment } from "react"
import juegosreact from './json/juegosreact.json'
import { Link } from "react-router-dom";
import './css/MenuReact.css'

function Prueba(){
    return(
  <Fragment>
        {
        juegosreact.map( juegoreact => {
          return(
            <div className='caja'>
                <div className='cajajuego'>
                    <div className='portadajuego'>
                        <img src={juegoreact.imagenportada} alt='No hay presupuesto para imagen :(' className='imagenjuego'/>
                    </div>
                    <div className='infojuego'>
                        <h1 className='titulojuego'>
                            {juegoreact.nombrejuego}
                        </h1>
                    <div className='sipnosis'>
                        <p className='t'>{juegoreact.parrafouno}</p>
                        <p className='t'>{juegoreact.parrafodos}</p>
                        <p className='t'>{juegoreact.parrafotres}</p>
                    </div>
                        <Link to={juegoreact.linkto}>
                            <h3 className='botonjugar'>
                                ¡CLICK AQUI PARA JUGAR! ➤
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
          )
  
        }) 
      }
  
      </Fragment>
    )
  }
  export default Prueba;
  