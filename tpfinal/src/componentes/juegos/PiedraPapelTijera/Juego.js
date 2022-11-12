import React, { useState, Fragment } from "react";
import Opcion from "./Opcion";
import { Resultado } from "./Resultado";
import tijeraJugador from "./img/tijerasJugador.png";
import tijeraMaquina from "./img/tijerasMaquina.png";
import papelJugador from "./img/papelJugador.png";
import papelMaquna from "./img/papelMaquina.png";
import piedraJugador from "./img/piedraJugador.png";
import piedraMaquina from "./img/piedraMaquina.png"
import './css/Juego.css'

export function Juego(){
    const[eleccionJugador,setEleccionJugador] = useState({});
    const[eleccionMaquina, setEleccionMaquina] = useState({});

    const opciones =[
        {
            eleccion: "piedra",
            derrota: "tijera",
            imgJugador: piedraJugador,
            imgMaquina: piedraMaquina
        },
        {
            eleccion: "papel",
            derrota: "piedra",
            imgJugador: papelJugador,
            imgMaquina: papelMaquna
        },
        {
            eleccion: "tijera",
            derrota: "papel",
            imgJugador: tijeraJugador,
            imgMaquina: tijeraMaquina
        },
       /* {
            elección: "Esperando",
            imgMaquina: ""
        }*/
    ]

    const elegirOpcion = (event) =>{
        reinicioTurno()
        const jugador = opciones.find(e=>e.eleccion === event.target.textContent);
        setEleccionJugador(jugador);
        setTimeout(() => eleccionRival(), 1000);
    }

    const eleccionRival = () =>{
        const eleccion = opciones[Math.floor(Math.random()*opciones.length)];
        setEleccionMaquina(eleccion);
    }

    const reinicioTurno = () => {
        setEleccionJugador({})
        setEleccionMaquina({})
        //setTurnos(antTurno => antTurno+1)
        //setDesabilitada(false)
    }

    return(
        <Fragment>
            <div className = "contenedorppt">            
            <div className = "resultado">
                <h2>
                    <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}/>                             
                </h2>   
            </div>         
                <main className="tarjetaContenedor">
                    <section className="tarjetaJugador">
                        <div className="jugador">Jugador</div>
                        <div className="eleccionJugador">
                            <img className="imagenSeleccion" src={eleccionJugador.imgJugador} alt={eleccionJugador.eleccion}/>
                        </div>
                        <div className = "opciones">
                            {opciones.map((e,index)=><Opcion key={e=Math.random()} 
                              elegir={elegirOpcion}
                              valor = {opciones[index]}/>)}
                        </div>
                    </section>
                    <section className = "tarjetaMaquina">
                     <div className="maquina">Maquina</div>
                       <div className="eleccionMaquina">
                           <img className="imagenSeleccion" src={eleccionMaquina.imgMaquina} alt={eleccionMaquina.eleccion}/>                        
                       </div>
                    </section>
                </main>
            </div>
        </Fragment>
    );
}

export default Juego;