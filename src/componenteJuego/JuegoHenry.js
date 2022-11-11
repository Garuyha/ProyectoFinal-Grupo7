import Phaser from "phaser";

class Juego extends Phaser.Scene{

    cursors = null;
    platforms = null;
    player = null;
    foods = null;

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
    this.load.image('personaje','./imgHenry/pelota.png');
    this.load.image('comida','./imgHenry/manzana.png');
    
    
    


    this.cursors = this.input.keyboard.createCursorKeys();
 
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
    this.platforms.create(760,323.5,'cortoParado'); //plataformas con cordenandas X (323.5)
    this.platforms.create(615,323.5,'cortoParado'); 
    this.platforms.create(760,383.5,'cortoParado');
    this.platforms.create(615,383.5,'cortoParado'); 
    this.platforms.create(390,250,'especialCostado');//plataformas de la misma fila cordenada Y (250) 
    this.platforms.create(0,250,'cortoCostado')
    this.platforms.create(942.6,250,'cortoCostado');
    this.platforms.create(1300,250,'especialCostado');
    this.platforms.create(1278,522.5,'largoParado'); //ver si cambia es el que esta desapareciendo a la derecha
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
    this.platforms.create(95,780,'especial');
    this.platforms.create(712.5,755,'largoCostado');


    

    //player asignado con sprite
    this.player = this.physics.add.sprite(200,600, 'personaje') //5,100
    this.player.setCollideWorldBounds(true);

    

   //agregando las manzanas
  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 10,
    setXY:{x: 180, y: 100, stepX: 115 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 5,
    setXY:{x: 30, y: 200, stepX: 65 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 9,
    setXY:{x: 460, y: 200, stepX: 90 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 4,
    setXY:{x: 50, y: 292, stepX: 60 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 7,
    setXY:{x: 358, y: 292, stepY: 60 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 7,
    setXY:{x: 358, y: 292, stepY: 60 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 5,
    setXY:{x: 450, y: 295, stepY: 65 }
    });

  this.foods = this.physics.add.group({
    key: 'comida',
    repeat: 9,
    setXY:{x: 460, y: 200, stepX: 90 }
    });
    

      //colision contra las plataformas
    this.physics.add.collider(this.player, this.platforms);    

    //choque de las estrellas con el jugador
    this.physics.add.overlap(this.player, this.foods, this.comidaColision, null, this);

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

comidaColision(player,comida) {    

  comida.disableBody(true, true);                //colision entre player y los objetos comida donde estos desaparecen

}


}

export default Juego;