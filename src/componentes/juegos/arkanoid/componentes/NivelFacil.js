

/*/ Escena del juego modo Easy    /*/


import Phaser from "phaser";
class NivelDos extends Phaser.Scene{


constructor(){

super('NivelDos'  );      // Constructor que almacenara un key o identificador de la escena, se encarga de enviar los parametros

}

/*/ Se precargan las imagenes y los sonidos del juego desde su directorio /*/

preload(){

this.load.image('3','./imagenes/3.jpg');
this.load.image('barra','./imagenes/barra.png');
this.load.image('pelota','./imagenes/pelota.png');
this.load.image('bloqueazul','./imagenes/bloqueazul.png');
this.load.image('bloquerojo','./imagenes/bloquerojo.png');
this.load.image('bloqueverde','./imagenes/bloqueverde.png');
this.load.audio('musicaescena', './musica/escena.mp3');
this.load.audio('gameover', './musica/gameover.mp3');
this.load.audio('gameover2', './musica/gameover2.mp3');
this.load.audio('bloquedestruccion', './musica/bloquedestruccion.mp3');
this.load.audio('youwin', './musica/youwin.mp3');
this.load.audio('youwin2', './musica/youwin2.mp3');
this.load.audio('barrasonido', './musica/barrasonido.mp3');

}

/*/  Se crean las imagenes y sonidos /*/

create(){

   /*/ Creacion de musica y sonido /*/
  
  this.musicaescena = this.sound.add('musicaescena');
  this.gameover = this.sound.add('gameover');
  this.gameover2 = this.sound.add('gameover2');
  this.youwin = this.sound.add('youwin');
  this.youwin2 = this.sound.add('youwin2');
  this.bloquedestruccion = this.sound.add('bloquedestruccion');
  this.barrasonido = this.sound.add('barrasonido');

  /*/ creacion de imagen de fondo /*/

  this.add.image(665,374,'3');
    
 /*/Creacion de la pelota /*/
  
 this.pelota = this.physics.add.image(  650,660, 'pelota');                       // se referencia a pelota y se le agrega fisicas para que pueda moverse en la pantalla.
 this.pelota.setCollideWorldBounds(true);                                        // hace posible que la pelota choque con los bordes de la pantalla.
 this.pelota.setBounce(1);                                                      // velocidad de la pelota al colisionar con un objeto
 this.pelota.setData('union', true);                                           
 
 /*/ Creacion de la barra del jugador /*/

 this.barra = this.physics.add.image(  650,700, 'barra').setImmovable();      // se añade fisicas a la barra, por lo tanto caera por la fuerzade de gravedad.
 this.barra.setCollideWorldBounds(true);                                     // La barra del jugador choca con los bordes de la pantalla y no se puede mover fuera de ellos.
 this.barra.body.allowGravity= false;                                       // se anula la gravedad al objeto y permanece estatico.
 this.cursors = this.input.keyboard.createCursorKeys();                    // se agrega un input o entrada de registro de teclas para poder mover al objeto con el teclado.
 this.physics.add.collider(this.pelota, this.barra);

 /*/ Creacion de los bloques /*/

 this.bloques = this.physics.add.staticGroup({
    key: ['bloqueverde'],   // Se crea un array que almacenara y ademas ubicara todos los bloques en la pantalla.
    frameQuantity: 13,      // cantidad de bloques en la fila.
    
    gridAlign: { 
    width: 13,             // Espacio entre los bloques en la fila.
    height: 4,             // Espacio entre los bloques en las columnas
    cellWidth: 80,        // Ancho de los bloques.
    cellHeight: 100,      // Altura de los bloques.
    x: 200,               // Posicion de los bloques en eje X
    y: 300,              // Posicion de los bloques en eje Y

  }
});

this.physics.add.collider(this.pelota, this.bloques, this.bloqueColision, null, this);   // Agrega colision entre la pelota y los bloques.



// Implemeta un texto (Marcador) "Score" en pantalla.

   this.scoreText = this.add.text(1150, 25, 'SCORE: 0', { 
   fontSize: '25px', 
   fill: 'yellow', 
   fontFamily: 'Franklin Gothic Medium',
  
});

}

update(){

  
  
/*/ Movimiento del jugador /*/


if (this.cursors.left.isDown){
  
this.barra.setVelocityX(-900);            // si se presiona la tecla flecha izquierda y si se mantiene apretada se produce un movimiento en el eje X hacia la izquierda.
if(this.pelota.getData('union')) {
    this.pelota.setVelocityX(-900);
    
  }
}
else if(this.cursors.right.isDown){      // si se presiona la tecla flecha derecha y se mantiene apretada se produce un movimiento en el eje X hacia la derecha.
this.barra.setVelocityX(900);
if (this.pelota.getData('union')) {
    this.pelota.setVelocityX(900);
  }

}
else {
  
    this.barra.setVelocityX(0);                     // se detiene la barra del jugador si no presiona una tecla.
    if (this.pelota.getData('union')) {
        this.pelota.setVelocityX(0);
      }
      

      if (this.cursors.up.isDown) {
        
        if (this.pelota.getData('union')) {                 
          this.pelota.setVelocity(-250, -500);              // velocidad de la pelota al despegarse de la barra del jugador  en los ejes X e Y
          this.pelota.setData('union', false);              // Permite que la pelota se separe de la barra al presionar la tecla flecha arriba.
          this.musicaescena.play()                          // Reproduce cancion de la escena.
          
        }
         
        
      }

     

}

/*/ Condicional que cambia a la escena  Game Over /*/

if (this.pelota.y > 700) {

    console.log('fin');
  
    this.mostrarGameOver();        // Cuando se cumple la condicion se llama al metodo en cuestion, y este ejecuta el cambio de escena.
    
}

}

/*/ Metodo que aplica la colision entre la pelota  los bloques y muestra la pantalla (escena) de Victoria /*/

bloqueColision(pelota,bloques) {
 
    this.score++;
    this.scoreText.setText('SCORE: ' + this.score);  // Cada vez que se detecta una colision suma un puntaje en el marcador Score.
    this.bloquedestruccion.play();                   // Reproduce sonido de destruccion de los bloques
    this.barrasonido.play() 

    
    bloques.disableBody(true, true);                // Permite que los bloques desaparezcan al ser colisionados por la pelota.
  
  if (this.bloques.countActive() === 0) {          // Cuando la cantidad de bloques llegue a cero se llama al  metodo mostrarPantallaVictoria() y este ejecutara el cambio de escena.
    this.mostrarPantallaVictoria();
           
  }
  
  
}

/*/ Metodo cambio de escena GameOver /*/
mostrarGameOver(){
 
this.scene.start('JuegoAcabado');                 // Inicia la escena GameOver.
this.gameover.play()                             // Reproduce sonido.
this.gameover2.play()                           // Reproduce sonido.
this.musicaescena.stop();                      // Detiene la musica de la escena Game.
}

/*/ Metodo cambio de escena Victoria /*/
mostrarPantallaVictoria(){

  this.scene.start('ganaste');                // Inicia la escena de Victoria.
  this.youwin.play();   
  this.youwin2.play();                      // Reproduce la musica de victoria.
  this.musicaescena.stop();                   // Detiene la musica de la escena Game.  
}

init() {
  
  this.score = 0;                   // Inicializa el Marcador Score en 0.
  
    
}






}

export default NivelDos;             // Exporta la escena.