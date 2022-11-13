import { useEffect, useState } from 'react';
import CartaUnica from './componentes/CartaUnica';
import './cssEzequiel/MemoriaApp.css';
import {Howl, Howler} from "howler"

/**Array donde se guardan las imagenes y se crea fuera de los componentes
 * porque son valores que nunca deben cambiar.
*/
const cartasImagenes = [
    {"src": "./assetsEzequiel/caruaje.png", sonido: "./audioEzequiel/seleccion-sonido.mp3",elegida: false},
    {"src": "./assetsEzequiel/estrella.png", sonido: "./audioEzequiel/seleccion-sonido.mp3", elegida: false},
    {"src": "./assetsEzequiel/hermitaneo.jpg", sonido: "./audioEzequiel/seleccion-sonido.mp3", elegida: false},
    {"src": "./assetsEzequiel/hiedrofante.png", sonido: "./audioEzequiel/seleccion-sonido.mp3", elegida: false},
    {"src": "./assetsEzequiel/mago.png", sonido: "./audioEzequiel/seleccion-sonido.mp3", elegida: false},
    {"src": "./assetsEzequiel/mundo.png", sonido: "./audioEzequiel/seleccion-sonido.mp3", elegida: false}
]


export default function App(){

    const errorSrc = "./audioEzequiel/error-sonido.mp3";
    const corretaSrc = "./audioEzequiel/correcta-sonido.mp3";
    const victoriaSrc = "./audioEzequiel/victoria-sonido.mp3";
    const derrotaSrc = "./audioEzequiel/perder-sonido.mp3";
    const[cartas, setCartas] = useState([]);
    const[turnos, setTurnos] = useState(8);
    const[aciertos, setAciertos] = useState(6);
    const[eleccionUno, setEleccionUno] = useState(null); //La primera carta que elige el jugador
    const[eleccionDos, setEleccionDos] = useState(null); //La segunda carta que elige el jugador
    const[desabilitada, setDesabilitada] = useState(false);
 
        
    /**Mezclar cartas
     * Esta funcion hace tres cosas principalmente:
     *  1) Toma todas las imagenes de cartasImagenes y las guarda en el array mezclarCartas.
     *  Duplicando la cantidad de imagenes de cartas que tenemos al guardarlas dos veces, haciendo uso del
     *  "spread operator" (...) lo que hace es una copia exacta del objeto o array en cuestion.
     * 
     *  2) Mezclar, propiamente dicho, el mazo de cartas.
     *  3) Asociar cada una de las doce cartas a la variable carta e iniciar los turnos.
     */

    const mezclarCartas = () => {
        const mezclarCartas = [...cartasImagenes, ...cartasImagenes]
            .sort(()=> Math.random() - 0.5)
            .map((carta) => ({...carta, id: Math.random()}))
            setCartas(mezclarCartas)
            setTurnos(8)
            setAciertos(6)
    }

    //Resolver una elección
    const resolverEleccion = (carta) => {
        eleccionUno ? setEleccionDos(carta) : setEleccionUno(carta)
    }

    //Comparar la elección de dos cartas
    useEffect(() => {
        if(eleccionUno && eleccionDos){
            setDesabilitada(true)
            if(eleccionUno.src === eleccionDos.src){
                setCartas(antCartas => {
                    return antCartas.map(carta => {
                        if(carta.src === eleccionUno.src){
                            return{...carta, elegida: true}
                        }else{
                            return carta
                        }
                    })
                })
                SoundPlay(corretaSrc)
                setTurnos(antTurno => antTurno+1)
                setAciertos(antAcierto => antAcierto-1)
                reinicioTurno()
            }else{
                SoundPlay(errorSrc)
                setTurnos(antTurno => antTurno-1)
                setTimeout(() => reinicioTurno(), 1000)
            }
        }
    }, [eleccionUno, eleccionDos])

    useEffect(()=>{
        if(turnos<=0){
            setDesabilitada(true)
            SoundPlay(derrotaSrc)
        }
        if(aciertos<=0){
            SoundPlay(victoriaSrc)
        }
    }, [turnos, aciertos])

    //Reinicio de las elección e incremento de los turnos jugados
    const reinicioTurno = () => {
        setEleccionUno(null)
        setEleccionDos(null)
        setDesabilitada(false)
    }  
    
    const SoundPlay = (src) =>{
        const sound = new Howl({
            src
        });
        sound.play();
      }
    
      Howler.volume(0.5)
    
    return(
        <div className = "App">
            <h1>TAROT MAGICO</h1>
            <button onClick={mezclarCartas}>Jugar</button>

            <div className="grilla-cartas">
                {cartas.map(carta => (
                    <CartaUnica 
                        key={carta.id} 
                        carta = {carta}
                        resolverEleccion = {resolverEleccion} //Pasamos la funcion como una propiedad para la carta
                        volteada = {carta === eleccionUno || carta === eleccionDos || carta.elegida}
                        desabilitada={desabilitada}
                    />
                ))}
            </div>
            <h1>                                
                {turnos <= 0 ? "Has perdido, precione el boton jugar para empezar de nuevo" : "Intentos: "+ turnos}
            </h1>
            <h1>
                {aciertos <= 0 ? "Has ganado, precione el boton jugar para empezar de nuevo": ""}
            </h1>
        </div>
    );
}
