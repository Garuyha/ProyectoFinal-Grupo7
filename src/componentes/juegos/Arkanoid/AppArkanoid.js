
import Phaser from 'phaser';
import NIvelNormal from './componentes/NIvelNormal';
import { useEffect, useState } from 'react';
import  { JuegoAcabado } from './componentes/GameOver.js'
import { Ganaste } from './componentes/Victoria.js';
import { Menu } from './componentes/Menu.js';
import NivelFacil  from './componentes/NivelFacil';

function AppArkanoid() {

 const[ listo,setListo  ]= useState(false);
   
useEffect( () =>{

const config= {
type: Phaser.AUTO,
width:1300,                                            // Ancho de la pantalla
height:750,                                           // Altura de la pantalla
scene:[Menu,JuegoAcabado,Ganaste,NIvelNormal,NivelFacil],     // Se guardan las escenas del juego.
physics: {                                          // se habilita las fisicas del juego.
default: 'arcade',
arcade: {                                          

}

}

};

const game = new Phaser.Game(config);
game.events.on("LISTO", setListo)

return() =>{

setListo(false);
game.destroy(true);

}
}, [listo]);

}

export default AppArkanoid;

