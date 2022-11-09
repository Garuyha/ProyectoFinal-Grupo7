import React from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react';
import { render } from 'react-dom';

//array de las imagenes de las cartas, recordar pasar a un json
const cartaImagen = [
    //"src": "ruta a una imagen especifica"
]

function MemoryGame(){

const[carta, fijarCartas] =useState([]) //valor inicial es un array vacío
const[turnos,fijarTurnos] =useState(0)//turnos que tomará al usuario para terminar el juego 

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
    fijarCartas(cartasBarajadas)
    //Iniciará los turnos en 0
    fijarTurnos(0)

}

console.log(cartas,turnos)

    render(

        <div className="MemoryGame">
            <h1>MemoryGame</h1>
            {/* cada vez que apretamos el boton jugar, llamamos a la funcioón barajar cartas */}
            <button className='memoryButton'>Jugar uwu</button>

{/* renderiza todas las cartas y usa como clave el id random añadido en barajar carta */}
        <div className="grillaCartas">
            {cartas.map(carta =>(
                <div className="carta" key={carta.id}>

                    <div>
                        <img className="frenteCarta" src={carta.src} alt="frente"></img>
                        <image className="dorsoCarta" src="ruta de la imagen del dorso de la carta" alt="dorso"/>
                    </div>

                </div>
            ))}
        </div>

        </div>

    )
}

export default MemoryGame;