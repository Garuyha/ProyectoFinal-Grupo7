import Phaser from 'phaser';
import Juego from './componenteJuego/JuegoHenry.js';
import { useEffect, useState } from 'react';
function App() {
  const[ listo,setListo  ]= useState(false);
   
useEffect( () =>{

const config= {
type: Phaser.AUTO,
width:1300,                            
height:750,                            
scene:[Juego],     
physics: {
default: 'arcade',
arcade: {                               
debug: false

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

export default App;