import { BotonInicio } from "./BotonInicioHenry";   
//import { BotonAvanzado } from "./BotonAvanzado";      
import Phaser from "phaser";
export class Inicio extends Phaser.Scene{



    constructor (){

    super( 'Inicio'  );                        

    this.BotonInicio= new BotonInicio(this);           
    //this.BotonAvanzado= new BotonAvanzado(this);
   
 }

      preload(){
        this.load.image('inicio','./imgHenry/inicioPantalla.jpg');
        this.BotonInicio.preload();                                   
        //this.BotonAvanzado.preload();                   

      }
         
      create(){
       
         this.add.image(665,374,'inicio');
         this.BotonInicio.create(); 
         //this.BotonAvanzado.create();                          
         
      }

      
     update(){
     
   }

     

      
}