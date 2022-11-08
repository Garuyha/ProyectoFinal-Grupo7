



import Phaser from "phaser";

class NivelUno extends Phaser.Scene{



constructor(){

super('NivelUno'  );      

}





     preload()

    {
        this.load.image('fondoUno','./imagenes/fondoUno.png');
        this.load.image('body', './imagenes/body.png');
        this.load.image('anana','./imagenes/anana.png');
        this.load.image('banana','./imagenes/banana.png');
        this.load.image('naranja','./imagenes/naranja.png');
        this.load.image('uva','./imagenes/uva.png');
    }



    

    create() 

    {

    
        this.body = this.physics.add.image(  650,500, 'body').setImmovable();
        this.cursors = this.input.keyboard.createCursorKeys(); 
        
        

        
        
        
        this.frutas = this.physics.add.staticGroup({
            key: ['anana', 'banana', 'uva', 'naranja'],   
            frameQuantity: 12,
            gridAlign: { 
            width: 13, 
            height: 156, 
            cellWidth: 200, 
            cellHeight: 150, 
            x: 60, 
            y: 150,
        
          }
        });
        this.physics.add.collider(this.body, this.frutas, this.frutaColision, null, this);

    }


  update ()
  {

    if (this.cursors.left.isDown )
    {
  
        this.body.setVelocityX(-100); 
        this.body.setVelocityY(0); 

    }


   else if (this.cursors.right.isDown)
    {
  
        this.body.setVelocityX(100);  
        this.body.setVelocityY(0); 
    }

    
    else if (this.cursors.up.isDown)
    {
  
        this.body.setVelocityY(-100);  
        this.body.setVelocityX(0); 
    }
  
    if (this.cursors.down.isDown )
    {
  
        this.body.setVelocityY(100); 
        this.body.setVelocityX(0); 

    }
    
  }

  
  frutaColision(body,frutas) {

    frutas.disableBody(true, true);                


    
}





}


export default NivelUno;