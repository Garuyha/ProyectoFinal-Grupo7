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
    this.platforms.create(408,363,'largoParado');
    this.platforms.create(750,325,'cortoParado'); 
    this.platforms.create(615,325,'cortoParado');
    this.platforms.create(390,248,'especialCostado');//plataformas de la misma fila cordenada Y (248)
    this.platforms.create(0,248,'cortoCostado')
    
    // 
    //  
    // 
    // 
    // this.platforms.create(0,248,'cortoCostado');
    // this.platforms.create(917,248,'cortoCostado');
    // this.platforms.create(917,248,'cortoCostado');
    // this.platforms.create(1350,248,'cortoCostado');
    // this.platforms.create(1278,505,'largoParado'); 
    // this.platforms.create(0,350,'largoCostado');//plataformas de la misma fila cordenada Y (335)
    // this.platforms.create(1095,339,'cortoCostado');
    // this.platforms.create(835,408,'cortoParado');
    // this.platforms.create(1000,430,'cortoCostado');//plataformas de la misma fila cordenada Y (430)
    // this.platforms.create(1045,430,'cortoCostado');
    // this.platforms.create(1000,440,'cortoCostado');//plataformas de la misma fila cordenada Y (440)
    // this.platforms.create(1045,440,'cortoCostado');
    // this.platforms.create(800,480,'largoCostado');
    // this.platforms.create(1190,501,'cortoParado');
    // this.platforms.create(800,570,'largoCostado');
    // this.platforms.create(1190,732,'cortoParado');
    // this.platforms.create(1100,732,'cortoParado');
    // this.platforms.create(755,678,'largoCostado');
    // this.platforms.create(755,660,'largoCostado');
    // this.platforms.create(305,600,'largoParado');
    // this.platforms.create(70,630,'cortoCostado');
    // this.platforms.create(170,435,'especialCostado');
    // this.platforms.create(117,535,'especialCostado');
    // this.platforms.create(100,535,'especialCostado');
    // this.platforms.create(520,363,'especial');
    // this.platforms.create(200,750,'especial');
    // this.platforms.create(80,750,'especial');
    
    

    //player asignado con sprite
    this.player = this.physics.add.sprite(5,100, 'personaje')
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