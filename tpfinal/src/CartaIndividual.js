import React from 'react';
import './MemoryGame.css';

function CartaIndividual({carta, gestionarEleccion}){

const gestionarClick = () =>{

    gestionarEleccion (carta)

}

return (

<div className="carta" >

<div>
    <img className="frenteCarta" src={carta.src} alt="frente"></img>
    <image className="dorsoCarta" src="/img/cover.png" onClick={gestionarClick} alt="dorso"/>
</div>

</div>

)

}

export default CartaIndividual;