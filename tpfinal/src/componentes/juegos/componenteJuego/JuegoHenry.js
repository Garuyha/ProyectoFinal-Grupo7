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
    this.load.image('ciruela','./imgHenry/ciruela.png');
    this.load.image('durazno','./imgHenry/durazno.png');
    this.load.image('limon','./imgHenry/limon.png');
    this.load.image('sandia','./imgHenry/sandia.png');
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
  this.player = this.physics.add.sprite(5,105, 'personaje') //5,105
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

//agregando las ananas  
  this.ananas = this.physics.add.staticGroup({
    key: 'anana',
    frameQuantity: 5,
    gridAlign: {
      width: 1, 
      height: 156, 
      cellWidth: 100, 
      cellHeight: 60, 
      x: 720, 
      y: 270,   
    } 
  });

//agregando las bananas
  this.bananas = this.physics.add.staticGroup({
    key: 'banana',
    frameQuantity: 6,
    gridAlign: {
      width: 3, 
      height: 156, 
      cellWidth: 60, 
      cellHeight: 100, 
      x: 930, 
      y: 438,   
    } 
    
  });

//agregando las naranjas
  this.naranjas = this.physics.add.staticGroup({
    key: 'naranja',
    frameQuantity: 3,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 408, 
      cellHeight: 80, 
      x: 645, 
      y: 225,   
    } 
  });

//agregando las uvas 
  this.uvas = this.physics.add.staticGroup({
    key: 'uva',
    frameQuantity: 14,
    gridAlign: {
      width: 7, 
      height: 2, 
      cellWidth: 55, 
      cellHeight: 100, 
      x: 33, 
      y: 235,   
    } 
  });

//agregando las ciruelas
  this.ciruelas = this.physics.add.staticGroup({
    key: 'ciruela',
    frameQuantity: 7,
    gridAlign: {
      width: 13, 
      height: 156, 
      cellWidth: 55, 
      cellHeight: 80, 
      x: 33, 
      y: 435,   
    } 
  });
  
//agregando los duraznos
  this.duraznos = this.physics.add.staticGroup({
    key: 'durazno',
    frameQuantity: 9,
    gridAlign: {
      width: 3, 
      height: 156, 
      cellWidth: 85, 
      cellHeight: 95, 
      x: 60, 
      y: 545,   
    } 
  });

//agregando los limones
  this.limones = this.physics.add.staticGroup({
    key: 'limon',
    frameQuantity: 24,
    gridAlign: {
      width: 12, 
      height: 156, 
      cellWidth: 55, 
      cellHeight: 95, 
      x: 450, 
      y: 640,   
    } 
  });

//agregando las sandias
  this.sandias = this.physics.add.staticGroup({
    key: 'sandia',
    frameQuantity: 9,
    gridAlign: {
      width: 3, 
      height: 156, 
      cellWidth: 85, 
      cellHeight: 95, 
      x: 100, 
      y: 545,   
    } 
  });

  
 
  


//colision contra las plataformas
  this.physics.add.collider(this.player, this.platforms, this.paredColision, null, this);    

//Creacion de cursores
  this.cursors = this.input.keyboard.createCursorKeys();

//choque de las comidas con el jugador 
  this.physics.add.overlap(this.player, this.manzanas, this.manzanaColision, null, this);
  this.physics.add.overlap(this.player, this.ananas, this.ananaColision, null, this);
  this.physics.add.overlap(this.player, this.bananas, this.bananaColision, null, this);
  this.physics.add.overlap(this.player, this.naranjas, this.naranjaColision, null, this);
  this.physics.add.overlap(this.player, this.uvas, this.uvaColision, null, this);
  this.physics.add.overlap(this.player, this.ciruelas, this.ciruelaColision, null, this);
  this.physics.add.overlap(this.player, this.duraznos, this.duraznoColision, null, this);
  this.physics.add.overlap(this.player, this.limones, this.limonColision, null, this);
  this.physics.add.overlap(this.player, this.sandias, this.sandiaColision, null, this);

//texto de puntaje
  this.scoreText = this.add.text(13, 10, 'score: 0', { fontSize: '32px', fill: '#FF0606' });

}


update(){

// Movimientos segun el cursor del teclado
  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-145);
    this.player.setVelocityY(0); 
   
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(145);
    this.player.setVelocityY(0);
  
      
  }else if (this.cursors.up.isDown)
  {
    this.player.setVelocityY(-145);
    this.player.setVelocityX(0);
  }
  else if (this.cursors.down.isDown)
{
  this.player.setVelocityY(145);
  this.player.setVelocityX(0);
}

}

manzanaColision(player,manzanas) {    
  manzanas.disableBody(true, true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 15;
  this.scoreText.setText('Score: ' + this.score)
}

ananaColision(player,ananas){
  ananas.disableBody(true, true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 50;
  this.scoreText.setText('Score: ' + this.score)
}

bananaColision(player,bananas){
  bananas.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen           
  this.score += 45;
  this.scoreText.setText('Score: ' + this.score)
}

naranjaColision(player,naranjas){
  naranjas.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 60;
  this.scoreText.setText('Score: ' + this.score)
}

uvaColision(player,uvas){
  uvas.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 30;
  this.scoreText.setText('Score: ' + this.score)
}

ciruelaColision(player,ciruelas){
  ciruelas.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 20;
  this.scoreText.setText('Score: ' + this.score)
}

duraznoColision(player,duraznos){
  duraznos.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 35;
  this.scoreText.setText('Score: ' + this.score)
}

limonColision(player,limones){
  limones.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 10;
  this.scoreText.setText('Score: ' + this.score)
}

sandiaColision(player,sandias){
  sandias.disableBody(true,true);                //colision entre player y los objetos comida donde estos desaparecen
  this.score += 35;
  this.scoreText.setText('Score: ' + this.score)
}

paredColision() {
  this.golpeSound.play()
  this.mostrarGameOver();
}

}

export default Juego;