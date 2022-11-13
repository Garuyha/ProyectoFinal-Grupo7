import React, { useState, Fragment} from "react";
import Opcion from "./Opcion";
import { Resultado } from "./Resultado";
import tijeraJugador from "./img/tijerasJugador.png";
import tijeraMaquina from "./img/tijerasMaquina.png";
import papelJugador from "./img/papelJugador.png";
import papelMaquna from "./img/papelMaquina.png";
import piedraJugador from "./img/piedraJugador.png";
import piedraMaquina from "./img/piedraMaquina.png"
import './css/Juego.css'
import {Howl, Howler} from "howler"

export function Juego(){
    const[eleccionJugador,setEleccionJugador] = useState({});
    const[eleccionMaquina, setEleccionMaquina] = useState(
        {
            elección: "Esperando",
            imgMaquina: "./assetsEzequiel/robot.png"
        }
    );

    const[desabilitar, setDesabilitar] = useState(false);

    const opciones =[
        {
            eleccion: "piedra",
            derrota: "tijera",
            imgJugador: piedraJugador,
            imgMaquina: piedraMaquina,
            sonido: "./audioEzequiel/roca-sonido.mp3"
        },
        {
            eleccion: "papel",
            derrota: "piedra",
            imgJugador: papelJugador,
            imgMaquina: papelMaquna,
            sonido: "./audioEzequiel/papel-sonido.mp3"
        },
        {
            eleccion: "tijera",
            derrota: "papel",
            imgJugador: tijeraJugador,
            imgMaquina: tijeraMaquina,
            sonido: "./audioEzequiel/tijeras-sonido.mp3"
        }
        
    ]

    const elegirOpcion = (event) =>{
        if(!desabilitar){
            reinicioTurno();
            setDesabilitar(true);
            setEleccionMaquina({
                elección: "Esperando",
                imgMaquina: "./assetsEzequiel/robot.png"
            });
            const jugador = opciones.find(e=>e.eleccion === event.target.textContent);
            setEleccionJugador(jugador);
            setTimeout(() => eleccionRival(), 1500);
            SoundPlay(jugador.sonido)
        }
    }

    const eleccionRival = () =>{
        const eleccion = opciones[Math.floor(Math.random()*(opciones.length))];
        setEleccionMaquina(eleccion);
        SoundPlay(eleccion.sonido)
        setDesabilitar(false);
    }

    const reinicioTurno = () => {
        setEleccionJugador({})
        setEleccionMaquina({})
    }

    const SoundPlay = (src) =>{
        const sound = new Howl({
            src
        })
        sound.play();
    }

    Howler.volume(0.5)
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
                            {opciones.map((e,index)=><Opcion 
                                key={e=Math.random()} 
                                elegir={elegirOpcion}
                                valor = {opciones[index]}/>
                            )}
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