import Phaser from "phaser";

class NivelDos extends Phaser.Scene{

    

constructor(){

super('NivelDos'  );    


}





     preload()

    {


    }
  create()


   { 

    this.map=this.add.tilemap('tiles')
    var tileset=this.map.addTilesetImage("grass", "grass");
 
    var bordes=this.map.createStaticLayer("bordes", tileset);
    

    
   }


    }

export default NivelDos;