import { useEffect, useState } from 'react';
import CartaUnica from './componentes/CartaUnica';
import './cssEzequiel/MemoriaApp.css';
import {Howl, Howler} from "howler" //Biblioteca necesaria para el funcionamiento del sonido

/**Array donde se guardan las imagenes y se crea fuera de los componentes con son valores que nunca deben cambiar
 * se los crea dentro propio archivo en lugar de json.
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

    const errorSrc = "./audioEzequiel/error-sonido.mp3"; //error, corracta, victoria y derrota, son los archivos de audio mp3 usados para los sonidos de la pagina.
    const corretaSrc = "./audioEzequiel/correcta-sonido.mp3";
    const victoriaSrc = "./audioEzequiel/victoria-sonido.mp3";
    const derrotaSrc = "./audioEzequiel/perder-sonido.mp3";
    const[cartas, setCartas] = useState([]); //array donde se encontraran las 12 cartas mostradas en pantalla.
    const[turnos, setTurnos] = useState(8); //Numero de intentos disponibles que tiene el jugador para ganar la partida.
    const[aciertos, setAciertos] = useState(6); //Cantidad de aciertos necesarios para ganar la partida.
    const[eleccionUno, setEleccionUno] = useState(null); //La primera carta que elige el jugador
    const[eleccionDos, setEleccionDos] = useState(null); //La segunda carta que elige el jugador
    const[desabilitada, setDesabilitada] = useState(false); //booleano que evita seleccionar cartas adicionales.
 
        
    /**Mezclar cartas
     * Esta funcion hace tres cosas principalmente:
     *  1) Toma todas las imagenes de cartasImagenes y las guarda en el array mezclarCartas.
     *  Duplicando la cantidad de imagenes de cartas que tenemos al guardarlas dos veces, haciendo uso del
     *  "spread operator" (...) lo que hace es una copia exacta del objeto o array en cuestion.
     * 
     *  2) Mezclar, propiamente dicho, el mazo de cartas haciendo uso del .sorth math.random.
     *  3) Asociar cada una de las doce cartas a la variable carta e iniciar los turnos, como el contador de aciertos necesarios para ganar.
     */

    const mezclarCartas = () => {
        const mezclarCartas = [...cartasImagenes, ...cartasImagenes]
            .sort(()=> Math.random() - 0.5)
            .map((carta) => ({...carta, id: Math.random()}))
            setCartas(mezclarCartas)
            setTurnos(8)
            setAciertos(6)
    }

    //Resolver una elección, funcion que permite el uso del useEffect Comprar la elección de dos cartas
    const resolverEleccion = (carta) => {
        eleccionUno ? setEleccionDos(carta) : setEleccionUno(carta)
    }

    //Comparar la elección de dos cartas
    useEffect(() => {
        if(eleccionUno && eleccionDos){ //Se compara si se han tomado las dos elecciónes
            setDesabilitada(true) //Se desactiva la selección de cartas adicionales
            if(eleccionUno.src === eleccionDos.src){ //Si las cartas son IGUALES
                setCartas(antCartas => { //Se crea un nuevo array de cartas, copia del anterior, pero con la diferencia que las cartas iguales quedan boca arriba.
                    return antCartas.map(carta => {
                        if(carta.src === eleccionUno.src){
                            return{...carta, elegida: true}
                        }else{
                            return carta
                        }
                    })
                })
                SoundPlay(corretaSrc) //Se reproduce el sonido de elección correcta.
                setTurnos(antTurno => antTurno+1) //Se aumenta la cantidad de intentos disponibles
                setAciertos(antAcierto => antAcierto-1) //Se reduce el contador invisible de la cantidad de aciertos necesarios para ganar.
                reinicioTurno() //Se reinica la selección de cartas, para las demas.
            }else{ //En caso de que las cartas no sean iguales
                SoundPlay(errorSrc) //Se reproduce el sonido de elección incorrecta.
                setTurnos(antTurno => antTurno-1) //Se reduce la cantidad de intentos disponibles
                setTimeout(() => reinicioTurno(), 1000) //Se tarda un 1 segundo, setTimeout, en reiniciar la selección de cartas.
            }
        }
    }, [eleccionUno, eleccionDos])

    //Control de los contadores existentes en la pagina
    useEffect(()=>{
        if(turnos<=0){ //Cuando la cantidad de intentos sea igual o inferior a 0
            setDesabilitada(true) //Se desactivan todas las cartas.
            SoundPlay(derrotaSrc) //Se reproduce el sonido de derrota.
        }
        if(aciertos<=0){ //Cuando la cantidad de aciertos sea igual o inferior a 0
            SoundPlay(victoriaSrc) //Se reproduce el sonido de victoria.
        }
    }, [turnos, aciertos])

    //Reinicio de las elección
    const reinicioTurno = () => {
        setEleccionUno(null) //Elimina la elección de las dos cartas anteriores
        setEleccionDos(null)
        setDesabilitada(false) //Se vuelve a habilitar la elección de cartas.
    }  
    
    //Funcion de Howl que permite la reproducción de sonido
    const SoundPlay = (src) =>{
        const sound = new Howl({
            src //Dirección del archivo mp3 a reproducir, la cual es enviada como un props al momento de ser llamada la funcion.
        });
        sound.play(); //reproducción del archivo
      }
    
      Howler.volume(0.5) //Volumen general de la reproducción de audio
    
    return(
        <div className = "App">
            <h1>TAROT MAGICO</h1>
            <button onClick={mezclarCartas}>Jugar</button> 

            <div className="grilla-cartas"> {/**Al momento de precionar el boton jugar, se llama a la funcion mezclar cartas que da inicio al juego. */}
                {cartas.map(carta => ( 
                    <CartaUnica //Acto seguido, creamos el array de las cartas a mostrar, donde a cada una se le pasa una key, imagen, controladores de elección y una funcion.
                        key={carta.id} 
                        carta = {carta}
                        resolverEleccion = {resolverEleccion} //Pasamos la funcion como una propiedad para la carta que permite la elección de dos cartas.
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
