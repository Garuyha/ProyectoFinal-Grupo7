import { useEffect, useState } from 'react';
import CartaUnica from './componentes/CartaUnica';
import './cssEzequiel/MemoriaApp.css';

/**Array donde se guardan las imagenes y se crea fuera de los componentes
 * porque son valores que nunca deben cambiar.
*/
const cartasImagenes = [
    {"src": "./assetsEzequiel/anillo.png", elegida: false},
    {"src": "./assetsEzequiel/casco.png", elegida: false},
    {"src": "./assetsEzequiel/espada.png", elegida: false},
    {"src": "./assetsEzequiel/escudo.png", elegida: false},
    {"src": "./assetsEzequiel/papiro.png", elegida: false},
    {"src": "./assetsEzequiel/posion.png", elegida: false}
]

export default function App(){

    const[cartas, setCartas] = useState([]);
    const[turnos, setTurnos] = useState(0);
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
            setTurnos(0)
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
                console.log("son iguales")
                reinicioTurno()
            }else{
                console.log("no son iguales")
                setTimeout(() => reinicioTurno(), 1000)
            }
        }
    }, [eleccionUno, eleccionDos])

    //Reinicio de las elección e incremento de los turnos jugados
    const reinicioTurno = () => {
        setEleccionUno(null)
        setEleccionDos(null)
        setTurnos(antTurno => antTurno+1)
        setDesabilitada(false)
    }

    return(
        <div className = "App">
            <h1>Juego de memoria</h1>
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
        </div>
    );
}