import React from 'react';
import { useState } from 'react';
import CartaIndividual from './CartaIndividual';

//array de las imagenes de las cartas, recordar pasar a un json
const cartaImagen = [
    //"src": "ruta a una imagen especifica"
    {"src" : "/img/Hierophant.png"},
    {"src" : "/img/HPriestess.png"},
    {"src" : "/img/Lovers.png"},
    {"src" : "/img/Moon.png"},
    {"src" : "/img/Star.png"},
    {"src" : "/img/Sun.png"}
]

function MemoryGame(){

const[cartas, setCartas] =useState([]) //valor inicial es un array vacío
const[turnos, setTurnos] =useState(0)//turnos que tomará al usuario para terminar el juego 
const[eleccionUno, setEleccionUno]=useState(null) //cuando el usuario clickee la primera carta, se actualizará
const[eleccionDos, setEleccionDos]=useState(null) //lo mismo pero con la segunda carta

//función para duplicar cada carta
const barajarCartas = () =>{
    //los tres puntos son el spread operator que permiten copiar los elementos de un array, se escribe con tres puntos
    //en este array estan los elementos de cartaImagen duplicados
    const cartasBarajadas =[...cartaImagen,...cartaImagen]
    //metodo .sort ordena los elementos de un arreglo
    //se ordena las cartas aleatoriamente. Si toca numero negativo, las cartas tendrán el mismo orden, si es positivo se voltean
    .sort(() => Math.random()-0.5)
    //vamos a añadir un id aleatorio a cada elemento del array
    .map((carta)=>({...carta, id:Math.random}))

    //actualizará el estado de las cartas
    setCartas(cartasBarajadas)
    //Iniciará los turnos en 0
    setTurnos(0)

}

console.log(cartas,turnos)

const gestionarEleccion = (carta) => {
console.log(carta)

}

    return(

        <div className="MemoryGame">
            <h1>Tarot Mágico</h1>
            {/* cada vez que apretamos el boton jugar, llamamos a la funcioón barajar cartas */}
            <button className='memoryButton' onClick={barajarCartas}>Jugar</button>

{/* renderiza todas las cartas y usa como clave el id random añadido en barajar carta */}
        <div className="grillaCartas">
            {cartas.map(carta =>(
                < CartaIndividual 
                key={carta.id} 
                carta={carta}
                gestionarEleccion={gestionarEleccion}
                />
            ))}
        </div>

        </div>

    )
}

export default MemoryGame;