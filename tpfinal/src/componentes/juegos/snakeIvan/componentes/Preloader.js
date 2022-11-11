import Phaser from "phaser";



  export default class Preloader extends Phaser.Scene{


   constructor(){

      super ('Preloader')


   }

  preload()
  {
   

  this.load.image('grass', './imagenes/mapa/grass.png')

  this.load.tilemapTiledJSON('tiles','./imagenes/mapa/tiles.json')

  }
   create()
   {

    this.scene.start('NivelUno')
   }



  }