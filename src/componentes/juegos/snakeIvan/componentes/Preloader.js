
//Este componente se encarga de precargar la imagen de las texturas junto a un archivo de tipo json que trae los parametros de las texturas //

import Phaser from "phaser";

export default class Preloader extends Phaser.Scene {
   constructor() {

      super('Preloader')                   // Constructor de la escena Preloader.
   }

   preload() {
      this.load.image('grass', './imagenes/mapa/grass.png')                        // Precarga la imagen de la texturas.
      this.load.tilemapTiledJSON('tiles', './imagenes/mapa/tiles.json')          // Precarga el archivo tipo json. 
   }
   create() {
      this.scene.start('NivelUno')            // Una vez precargada la imagen y el archivo  de extencion json, pasa a la escena NivelUno.
   }



}