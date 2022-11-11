import Phaser from "phaser";

class Juego extends Phaser.Scene{

    cursors = null;
    platforms = null;
    player = null;
    manzanas = null;
    ananas = null;
    bananas = null;
    naranjas = null
    score = null;
    scoreText = null;

constructor(){
// Constructor que almacenara un key o identificador de la escena, se encarga de enviar los parametros
super('Juego');      

}

// Se precargan las imagenes y los sonidos del juego desde su directorio

preload(){
    this.load.image('fondo','./imgHenry/fondo.png');
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
    this.load.image('personaje','./imgHenry/pelota.png');
    
    
    
    


    
 
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
  this.platforms.create(0,355,'largoCostado');//plataformas de la misma fila cordenada Y (355)
  this.platforms.create(1015,355,'cortoCostado');
  this.platforms.create(872.5,468.9,'cortoParado');
  this.platforms.create(1015,455,'cortoCostado');//plataformas de la misma fila cordenada Y (455)
  this.platforms.create(852.5,550,'largoCostado');
  this.platforms.create(513.5,476.5,'cortoParado');
  this.platforms.create(712.5,650,'largoCostado');
  this.platforms.create(1157.5,723.5,'cortoParado');
  this.platforms.create(1130.5,723.5,'cortoParado');
  this.platforms.create(305,630,'largoParado');
  this.platforms.create(65,660,'cortoCostado'); // izquierda abajo
  this.platforms.create(171,462.5,'especialCostado');
  this.platforms.create(112.5,560,'especialCostado');
  this.platforms.create(513.5,390,'especial');
  this.platforms.create(407.5,515,'especial');
  this.platforms.create(207.5,780,'especial');
  this.platforms.create(90,780,'especial');
  this.platforms.create(712.5,755,'largoCostado');


    

//player asignado con sprite
  this.player = this.physics.add.sprite(5,100, 'personaje') //5,100
  this.player.setCollideWorldBounds(true);

    

//agregando las manzanas
  this.manzanas = this.physics.add.staticGroup({
    key: 'manzana',
    frameQuantity: 11,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 110, 
      cellHeight: 150, 
      x: 200, 
      y: 162,   
    } 
  });      
  
  this.ananas = this.physics.add.staticGroup({
    key: 'anana',
    frameQuantity: 9,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 100, 
      cellHeight: 150, 
      x: 500, 
      y: 260,   
    } 
  });
 
  this.bananas = this.physics.add.staticGroup({
    key: 'banana',
    frameQuantity: 6,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 60, 
      cellHeight: 80, 
      x: 930, 
      y: 430,   
    } 
    
  });

  this.naranjas = this.physics.add.staticGroup({
    key: 'naranja',
    frameQuantity: 6,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 60, 
      cellHeight: 80, 
      x: 930, 
      y: 525,   
    } 
  });
  
  this.uvas = this.physics.add.staticGroup({
    key: 'uva',
    frameQuantity: 7,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 55, 
      cellHeight: 80, 
      x: 33, 
      y: 225,   
    } 
  });
 
  


//colision contra las plataformas
  this.physics.add.collider(this.player, this.platforms);    

//Creacion de cursores
  this.cursors = this.input.keyboard.createCursorKeys();

//choque de las comidas con el jugador 
  this.physics.add.overlap(this.player, this.manzanas, this.manzanaColision, null, this);
  this.physics.add.overlap(this.player, this.ananas, this.ananaColision, null, this);
  this.physics.add.overlap(this.player, this.bananas, this.bananaColision, null, this);
  this.physics.add.overlap(this.player, this.naranjas, this.naranjaColision, null, this);
  this.physics.add.overlap(this.player, this.uvas, this.uvaColision, null, this);

//texto de puntaje
  this.scoreText = this.add.text(13, 10, 'score: 0', { fontSize: '32px', fill: '#FF0606' });

 

}


update(){
// Movimientos segun el cursor del teclado
  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-140);
    this.player.setVelocityY(0); 
   
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(140);
    this.player.setVelocityY(0);
  
      
  }else if (this.cursors.up.isDown)
  {
    this.player.setVelocityY(-140);
    this.player.setVelocityX(0);
  }
  else if (this.cursors.down.isDown)
{
  this.player.setVelocityY(140);
  this.player.setVelocityX(0);
}

}

manzanaColision(player,manzanas) {    
  manzanas.disableBody(true, true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 10;
  this.scoreText.setText('Score: ' + this.score)
}

ananaColision(player,ananas){
  ananas.disableBody(true, true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 25;
  this.scoreText.setText('Score: ' + this.score)
}

bananaColision(player,bananas){
  bananas.disableBody(true,true);
  this.score += 30;
  this.scoreText.setText('Score: ' + this.score)
}

naranjaColision(player,naranjas){
  naranjas.disableBody(true,true);
  this.score += 50;
  this.scoreText.setText('Score: ' + this.score)
}

uvaColision(player,uvas){
  uvas.disableBody(true,true);
  this.score += 60;
  this.scoreText.setText('Score: ' + this.score)
}


}

export default Juego;