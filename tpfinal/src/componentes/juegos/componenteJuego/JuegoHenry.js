import Phaser from "phaser";

class Juego extends Phaser.Scene{

    cursors = null;
    platforms = null;
    player = null;
    grupo = null;
    score = null;
    scoreText = null;

constructor(){
// Constructor que almacenara un key o identificador de la escena, se encarga de enviar los parametros
super('Juego');      

}

// Se precargan las imagenes y los sonidos del juego desde su directorio
preload(){
    this.load.image('fondo','./imgHenry/fondoNivel2HungryAnt.png');
    this.load.image('largoCostado','./imgHenry/ParedCostadoLargo.png');
    this.load.image('largoParado','./imgHenry/ParedParadoLargo.png');
    this.load.image('cortoCostado','./imgHenry/ParedCostadoCorto.png');
    this.load.image('cortoParado','./imgHenry/ParedParadoCorto.png');
    this.load.image('especialCostado','./imgHenry/EspecialCostado.png');
    this.load.image('especial','./imgHenry/Especial.png');
    this.load.image('manzana','./imgHenry/manzana.png');
    this.load.image('anana','./imgHenry/anana.png');
    this.load.image('banana','./imgHenry/banana.png');
    this.load.image('naranja','./imgHenry/naranja.png');
    this.load.image('uva','./imgHenry/uva.png');
    this.load.image('ciruela','./imgHenry/ciruela.png');
    this.load.image('durazno','./imgHenry/durazno.png');
    this.load.image('limon','./imgHenry/limon.png');
    this.load.image('sandia','./imgHenry/sandia.png');
    this.load.image('personaje','./imgHenry/hormiga.png');
    
}

//  Se crean las imagenes y sonidos
create(){

//creando el fondo
  this.add.image(650,370,'fondo');

//creando las plataformas
  this.platforms = this.physics.add.staticGroup();
 
  this.platforms.create(326,55,'largoCostado'); //plataformas que separan el juego del lugar de score
  this.platforms.create(975,55,'largoCostado'); 
  this.platforms.create(158,155,'cortoCostado');// plataformas de la misma fila cordenada Y (155)
  this.platforms.create(550,155,'cortoCostado');
  this.platforms.create(1110,155,'largoCostado'); 
  this.platforms.create(407.5,362.5,'largoParado');
  this.platforms.create(760,323.5,'cortoParado'); 
  this.platforms.create(615,323.5,'cortoParado'); 
  this.platforms.create(760,383.5,'cortoParado');
  this.platforms.create(615,383.5,'cortoParado'); 
  this.platforms.create(390,250,'especialCostado');//plataformas de la misma fila cordenada Y (250) 
  this.platforms.create(0,250,'cortoCostado')
  this.platforms.create(942.6,250,'cortoCostado');
  this.platforms.create(1300,250,'especialCostado');
  this.platforms.create(1278,522.5,'largoParado');
  this.platforms.create(1278,700,'especial');
  this.platforms.create(0,355,'largoCostado');//plataformas de la misma fila cordenada Y (355)
  this.platforms.create(1015,355,'cortoCostado');
  this.platforms.create(872.5,468.9,'cortoParado');
  this.platforms.create(1015,455,'cortoCostado');//plataformas de la misma fila cordenada Y (455)
  this.platforms.create(852.5,550,'largoCostado');
  this.platforms.create(513.5,476.5,'cortoParado');
  this.platforms.create(712.5,650,'largoCostado');
  this.platforms.create(1160.5,723.5,'cortoParado');
  this.platforms.create(1133.5,723.5,'cortoParado');
  this.platforms.create(1198.5,723.5,'cortoParado');
  this.platforms.create(1238.5,723.5,'cortoParado');
  this.platforms.create(305,630,'largoParado');
  this.platforms.create(65,660,'cortoCostado'); // izquierda abajo
  this.platforms.create(171,462.5,'especialCostado');
  this.platforms.create(112.5,560,'especialCostado');
  this.platforms.create(513.5,390,'especial');
  this.platforms.create(407.5,515,'especial');
  this.platforms.create(207.5,780,'especial');
  this.platforms.create(90,780,'especial');
  this.platforms.create(712.5,755,'largoCostado');
  this.platforms.create(400,755,'especialCostado');
  this.platforms.create(1000,755,'especialCostado'); 

//player asignado con sprite
  this.player = this.physics.add.image(20,105, 'personaje').setImmovable(); // La variable y palabra reservada jugador se encarga de guardar a la imagen del jugador con su posicion en la pantalla, ademas se la establece como  Inamovible es decir permancera quieta amenos que se produzca un movimiento.
  this.player.setCollideWorldBounds(true); // Impide que el jugador se salga del rango de la pantalla, este choca con los bordes.
  this.cursors = this.input.keyboard.createCursorKeys();//Creacion de cursores para jugador

//posicionamiento de las objetos a ser consumidos por el personaje
  this.grupo = this.physics.add.staticGroup();   

//agregando las manzanas
  this.grupo.create(650, 104, 'manzana');
  this.grupo.create(750, 104, 'manzana');
  this.grupo.create(850, 104, 'manzana');
  this.grupo.create(950, 104, 'manzana');
  this.grupo.create(1050, 104, 'manzana');
  this.grupo.create(1150, 104, 'manzana');
  this.grupo.create(1250, 104, 'manzana'); 

// //agregando las ananas  
  this.grupo.create(686, 255, 'anana');
  this.grupo.create(686, 315, 'anana');
  this.grupo.create(686, 375, 'anana');
  this.grupo.create(686, 435, 'anana');
  this.grupo.create(686, 495, 'anana');
  
//agregando las bananas
  this.grupo.create(915, 405, 'banana');
  this.grupo.create(915, 505, 'banana');
  this.grupo.create(975, 405, 'banana');
  this.grupo.create(975, 505, 'banana');
  this.grupo.create(1035, 405, 'banana');
  this.grupo.create(1035, 505, 'banana');

// //agregando las naranjas
  this.grupo.create(452, 201.5, 'naranja');
  this.grupo.create(565, 503, 'naranja');
  this.grupo.create(820, 503, 'naranja');
  this.grupo.create(820, 305, 'naranja');
  this.grupo.create(1280, 305, 'naranja');
  this.grupo.create(1280, 201.5, 'naranja');
  this.grupo.create(1218, 600, 'naranja');


//agregando las uvas 
  this.grupo.create(22, 200, 'uva');
  this.grupo.create(22, 300, 'uva');
  this.grupo.create(80, 200, 'uva');
  this.grupo.create(80, 300, 'uva');
  this.grupo.create(140, 200, 'uva');
  this.grupo.create(140, 300, 'uva');

//agregando las ciruelas
  this.grupo.create(22, 410, 'ciruela');
  this.grupo.create(77, 410, 'ciruela');
  this.grupo.create(132, 410, 'ciruela');
  this.grupo.create(187, 410, 'ciruela');
  this.grupo.create(242, 410, 'ciruela');
  this.grupo.create(297, 410, 'ciruela');
  
//agregando los duraznos
  this.grupo.create(34, 735, 'durazno');
  this.grupo.create(150, 735, 'durazno');
  this.grupo.create(255, 735, 'durazno');
  this.grupo.create(25, 610, 'durazno');
  this.grupo.create(110, 610, 'durazno');
  this.grupo.create(195, 610, 'durazno');
  this.grupo.create(255, 513, 'durazno');
  this.grupo.create(155, 513, 'durazno');
  this.grupo.create(55, 513, 'durazno');

//agregando las sandias
  this.grupo.create(105, 513, 'sandia');
  this.grupo.create(205, 513, 'sandia');
  this.grupo.create(152, 610, 'sandia');
  this.grupo.create(65, 610, 'sandia');
  this.grupo.create(90, 705, 'sandia');
  this.grupo.create(208, 705, 'sandia');

//agregando los limones
  this.grupo.create(460, 600, 'limon');
  this.grupo.create(460, 705, 'limon');
  this.grupo.create(540, 600, 'limon');
  this.grupo.create(540, 705, 'limon');
  this.grupo.create(620, 600, 'limon');
  this.grupo.create(620, 705, 'limon');
  this.grupo.create(700, 600, 'limon');
  this.grupo.create(700, 705, 'limon');
  this.grupo.create(780, 600, 'limon');
  this.grupo.create(780, 705, 'limon');
  this.grupo.create(860, 600, 'limon');
  this.grupo.create(860, 705, 'limon');
  this.grupo.create(940, 600, 'limon');
  this.grupo.create(940, 705, 'limon');
  this.grupo.create(1020, 600, 'limon');
  this.grupo.create(1020, 705, 'limon');

//colision jugador contra las plataformas
  this.physics.add.collider(this.player, this.platforms, this.paredColision, null, this); 

//colision jugador contra grupo (frutas y verduras)
  this.physics.add.overlap(this.player, this.grupo, this.frutaColision, null, this); 

//Creacion de la musica y sonido


//texto de puntaje
  this.scoreText = this.add.text(13, 10, 'score: 0', { fontSize: '32px', fill: '#FF0606' });

}

update(){

// Movimientos segun el cursor del teclado
  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-145);
    this.player.setVelocityY(0);
    this.player.flipX = true;                  // Gira la imagen del jugador 300 unidades en X hacia la izquierda (la serpiente mira hacia la izquierda).
    this.player.rotation = 300;
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(145);
    this.player.setVelocityY(0);
    this.player.rotation = -300;    
  }
  else if (this.cursors.up.isDown)
  {
    this.player.setVelocityY(-145);
    this.player.setVelocityX(0);
    this.player.rotation = 0;
  }
  else if (this.cursors.down.isDown)
  {
    this.player.setVelocityY(145);
    this.player.setVelocityX(0); 
    this.player.rotation = 600; 
  }

}

frutaColision(player, grupo){
  grupo.disableBody(true,true);
  this.score++;
  this.scoreText.setText('SCORE: ' + this.score);
  //this.comidaSound.play
  //this.scoreSound.play()
  // if (this.grupo.countActive() === 0)
  // {
  //   this,mostrarPantallaVictoria();
  // }
}

paredColision() {
  this.golpeSound.play()
  this.mostrarGameOver();
}

// mostrarGameOver(){
//   this.scene.start('GameOver')
// }

// mostrarPantallaVictoria() {
//   this.scene.start('Victoria');       // Inicia la escena Victoria          
//   this.sound.pauseAll('musica1')      // Pausa la musica de el nivel 1
//   this.niniosSound.play()             // Reproduce sonido.
//   this.victoriaSound.play()           // Reproduce sonido.
// }

}

export default Juego;