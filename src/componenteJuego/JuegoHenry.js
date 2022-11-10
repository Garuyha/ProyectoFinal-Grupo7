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
    this.platforms.create(1278,510,'largoParado');
   
    

    

    //player asignado con sprite
    this.player = this.physics.add.sprite(5,100, 'personaje')
    this.player.setCollideWorldBounds(true);

    

      //rebote contra las plataformas
    this.physics.add.collider(this.player, this.platforms);
 

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