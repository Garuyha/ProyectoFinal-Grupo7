



import Phaser from "phaser";

class NivelUno extends Phaser.Scene{



constructor(){

super('NivelUno'  );      

}







     preload()

    {
        this.load.image('fondoUno','./imagenes/fondoUno.png');
        this.load.image('body', './imagenes/body.png');
        

    }



    

    create() 

    {

    
        this.add.image(650,350,'fondoUno');
        this.body = this.physics.add.image(  650,500, 'body').setImmovable();
        this.cursors = this.input.keyboard.createCursorKeys(); 


    }


  update ()
  {

    if (this.cursors.left.isDown )
    {
  
        this.body.setVelocityX(-200); 
        this.body.setVelocityY(0); 

    }


   else if (this.cursors.right.isDown)
    {
  
        this.body.setVelocityX(200);  
        this.body.setVelocityY(0); 
    }

    
    else if (this.cursors.up.isDown)
    {
  
        this.body.setVelocityY(-200);  
        this.body.setVelocityX(0); 
    }
  
    if (this.cursors.down.isDown )
    {
  
        this.body.setVelocityY(200); 
        this.body.setVelocityX(0); 

    }
  }






}


export default NivelUno;