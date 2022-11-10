import Phaser from "phaser";

class Juego extends Phaser.Scene{

    cursors = null;
    platforms = null;
    player = null;

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
    this.platforms.create(165,155,'cortoCostado');// plataformas de la misma fila cordenada Y (155)
    this.platforms.create(550,155,'cortoCostado');
    this.platforms.create(1100,155,'largoCostado');  
    this.platforms.create(408,363,'largoParado');
    this.platforms.create(735,320,'cortoParado'); 
    this.platforms.create(628,320,'cortoParado');
    this.platforms.create(380,248,'cortoCostado');//plataformas de la misma fila cordenada Y (248)
    this.platforms.create(0,248,'cortoCostado');
    this.platforms.create(917,248,'cortoCostado');
    this.platforms.create(917,248,'cortoCostado');
    this.platforms.create(1300,248,'cortoCostado');
    this.platforms.create(1278,501,'largoParado'); 
    this.platforms.create(0,335,'largoCostado');//plataformas de la misma fila cordenada Y (335)
    this.platforms.create(1095,335,'cortoCostado');
    this.platforms.create(835,408,'cortoParado');
    this.platforms.create(1000,430,'cortoCostado');
    this.platforms.create(1045,430,'cortoCostado');
    this.platforms.create(1000,440,'cortoCostado');
    this.platforms.create(1045,440,'cortoCostado');
    this.platforms.create(800,480,'largoCostado');
    this.platforms.create(1190,501,'cortoParado');
    this.platforms.create(800,570,'largoCostado');
    this.platforms.create(1190,732,'cortoParado');
    this.platforms.create(1100,732,'cortoParado');
    this.platforms.create(755,678,'largoCostado');
    this.platforms.create(755,660,'largoCostado');
    this.platforms.create(305,600,'largoParado');

    

    //player asignado con sprite
    this.player = this.physics.add.sprite(5,100, 'personaje')
    this.player.setCollideWorldBounds(true);

    

   //agregando las estrellas 
    this.foods = this.physics.add.group({
      key: 'comida',
      repeat: 10,
      setXY:{x: 180, y: 100, stepX: 120 }
      });
      this.foods.create(200,200,'comida');

      //colision contra las plataformas
    this.physics.add.collider(this.player, this.platforms);    

    //choque de las estrellas con el jugador
    this.physics.add.overlap(this.player, this.foods, this.collectStar, null, this);

    //texto de puntaje
    this.scoreText = this.add.text(13, 10, 'score: 0', { fontSize: '32px', fill: '#FF0606' });

 

}


update(){
// Movimientos segun el cursor del teclado
  if (this.cursors.left.isDown)
  {
    this.player.setVelocityX(-140);
  
   
  }
  else if (this.cursors.right.isDown)
  {
    this.player.setVelocityX(140);
  
  
      
  }else if (this.cursors.up.isDown)
  {
    this.player.setVelocityY(-140);
  
  }
  else if (this.cursors.down.isDown)
{
  this.player.setVelocityY(140);

}
else
{
  this.player.setVelocityX(0);
  this.player.setVelocityY(0);
}


}

}

export default Juego;