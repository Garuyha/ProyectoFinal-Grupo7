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
    this.load.image('costado','./imgHenry/bloqueCostado.png');
    this.load.image('parado','./imgHenry/bloqueParado.png');
    this.load.image('mapa','./imgHenry/parte1.png');
    this.load.image('personaje','./imgHenry/pelota.png');
    
    
    


    this.cursors = this.input.keyboard.createCursorKeys();
 
}

//  Se crean las imagenes y sonidos

create(){
    //creando el fondo
    this.add.image(650,370,'fondo');

    //creando las plataformas
    this.platforms = this.physics.add.staticGroup();
 
    this.platforms.create(800,350,'costado').setScale(2).refreshBody();
    this.platforms.create(20,250,'parado');
    this.platforms.create(250,20,'costado');
    this.platforms.create(250,120,'costado');
    this.platforms.create(610,75,'costado');
    this.platforms.create(480,295,'parado');
    this.platforms.create(250,340,'parado');
    this.platforms.create(235,550,'costado');
    
    

    

    //player asignado con sprite
    this.player = this.physics.add.sprite(5,10, 'personaje')
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