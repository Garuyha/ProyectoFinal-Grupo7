import { useState } from 'react';
import CartaUnica from './componentes/CartaUnica';
import './cssEzequiel/MemoriaApp.css';

/**Array donde se guardan las imagenes y se crea fuera de los componentes
 * porque son valores que nunca deben cambiar.
*/
const cartasImagenes = [
    {"src": "./assetsEzequiel/anillo.png"},
    {"src": "./assetsEzequiel/casco.png"},
    {"src": "./assetsEzequiel/espada.png"},
    {"src": "./assetsEzequiel/escudo.png"},
    {"src": "./assetsEzequiel/papiro.png"},
    {"src": "./assetsEzequiel/posion.png"}
]

export default function App(){

    const[cartas, setCartas] = useState([]);
    const[turnos, setTurnos] = useState(0);
    const[eleccionUno, setEleccionUno] = useState(null); //La primera carta que elige el jugador
    const[eleccionDos, setEleccionDos] = useState(null); //La segunda carta que elige el jugador

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
                    />
                ))}
            </div>
        </div>
    );
}
