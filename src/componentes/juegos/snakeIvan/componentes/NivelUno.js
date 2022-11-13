
import Phaser from "phaser";
class NivelUno extends Phaser.Scene {

    uva = null;

    constructor() {

        super('NivelUno');


    }





    preload() {

        this.load.image('snake', './imagenes/snake.png');
        this.load.image('cuerpo', './imagenes/cuerpo.png');
        this.load.image('uva', './imagenes/uva.png');
        this.load.image('banana', './imagenes/banana.png');
        this.load.image('anana', './imagenes/anana.png');
        this.load.image('ciruela', './imagenes/ciruela.png');
        this.load.image('sandia', './imagenes/sandia.png');
        this.load.image('limon', './imagenes/limon.png');
        this.load.image('naranja', './imagenes/naranja.png');
        this.load.image('durazno', './imagenes/durazno.png');
        this.load.image('manzana', './imagenes/manzana.png');
        this.load.image('barra', './imagenes/barra.png');
        this.load.image('fondoescena', './imagenes/fondoescena.jpg');


        this.load.audio('comida', './musica/comida.mp3');
        this.load.audio('golpe', './musica/golpe.mp3');

    }

    create() {


        this.jugador = this.physics.add.image(650, 500, 'snake').setImmovable();    // La variable y palabra reservada jugador se encarga de guardar a la imagen del jugador con su posicion en la pantalla, ademas se la establece como  Inamovible es decir permancera quieta amenos que se produzca un movimiento.
        this.physics.add.collider(this.jugador, this.barra)
        this.jugador.setCollideWorldBounds(true);


        this.cursors = this.input.keyboard.createCursorKeys();                    // Se  crea un input o entrada de registro para las teclas presionadas.

        /*/Array que crea y posiciona a las uva /*/

        this.grupo = this.physics.add.staticGroup();

        this.grupo.create(140, 250, 'uva');
        this.grupo.create(140, 70, 'uva');
        this.grupo.create(140, 170, 'uva');
        this.grupo.create(140, 460, 'uva');
        this.grupo.create(140, 540, 'uva');
        this.grupo.create(140, 630, 'uva');


        this.grupo.create(324, 250, 'naranja');
        this.grupo.create(324, 70, 'naranja');
        this.grupo.create(324, 170, 'naranja');
        this.grupo.create(324, 460, 'naranja');
        this.grupo.create(324, 530, 'naranja');
        this.grupo.create(324, 600, 'naranja');


        this.grupo.create(365, 250, 'banana');
        this.grupo.create(365, 70, 'banana');
        this.grupo.create(365, 170, 'banana');
        this.grupo.create(365, 460, 'banana');
        this.grupo.create(750, 70, 'banana');
        this.grupo.create(750, 170, 'banana');
        this.grupo.create(750, 120, 'banana');

        this.grupo.create(420, 250, 'anana');
        this.grupo.create(420, 70, 'anana');
        this.grupo.create(420, 170, 'anana');
        this.grupo.create(420, 460, 'anana');
        this.grupo.create(420, 540, 'anana');
        this.grupo.create(420, 600, 'anana');

        this.grupo.create(630, 250, 'ciruela');
        this.grupo.create(630, 70, 'ciruela');
        this.grupo.create(630, 170, 'ciruela');


        this.grupo.create(1000, 250, 'sandia');
        this.grupo.create(1000, 70, 'sandia');
        this.grupo.create(1000, 170, 'sandia');
        this.grupo.create(1000, 355, 'sandia');
        this.grupo.create(1000, 460, 'sandia');
        this.grupo.create(1000, 540, 'sandia');

        this.grupo.create(1095, 250, 'limon');
        this.grupo.create(1095, 70, 'limon');
        this.grupo.create(1095, 170, 'limon');
        this.grupo.create(1095, 355, 'limon');
        this.grupo.create(1095, 460, 'limon');
        this.grupo.create(1095, 540, 'limon');
        this.grupo.create(1095, 600, 'limon');

        this.grupo.create(900, 250, 'durazno');
        this.grupo.create(900, 70, 'durazno');
        this.grupo.create(900, 170, 'durazno');
        this.grupo.create(900, 355, 'durazno');
        this.grupo.create(900, 460, 'durazno');
        this.grupo.create(900, 540, 'durazno');


        this.grupo.create(820, 70, 'manzana');
        this.grupo.create(605, 475, 'manzana');
        this.grupo.create(605, 550, 'manzana');

        this.grupo.create(680, 550, 'manzana');
        this.grupo.create(70, 250, 'manzana');
        this.grupo.create(70, 70, 'manzana');
        this.grupo.create(70, 170, 'manzana');
        this.grupo.create(70, 460, 'manzana');
        this.grupo.create(70, 540, 'manzana');
        this.add.image('fondoescena', 600, 300)


        this.comidaSound = this.sound.add('comida');
        this.golpeSound = this.sound.add('golpe');


        this.physics.add.collider(this.jugador, this.grupo, this.frutaColision, null, this);  //  Se añade la funcion de colision a los objetos establecidos en los parametros.



        this.map = this.add.tilemap('tiles')
        var tileset = this.map.addTilesetImage("grass", "grass");

        var solidos = this.map.createStaticLayer("bordes", tileset);


        solidos.setCollisionByProperty({ solido: true })

        this.physics.add.collider(this.jugador, solidos, this.paredColision, null, this)

        this.scoreText = this.add.text(1170, 25, 'SCORE: 0', {
            fontSize: '25px',
            fill: 'yellow',
            fontFamily: 'Franklin Gothic Medium',

        });

    }


    update() {

        if (this.cursors.left.isDown)               // Si se presiona la tecla "izquierda" :
        {

            this.jugador.setVelocityX(-100);            // El jugador se desplaza a 100 unidades en X hacia la izquierda.
            this.jugador.setVelocityY(0);              // El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la izquierda y en diagonal.
            this.jugador.flipX = true;                  // Gira la imagen del jugador 300 unidades en X hacia la izquierda (la serpiente mira hacia la izquierda).
            this.jugador.rotation = 300;
        }


        else if (this.cursors.right.isDown)            // Si se presiona la tecla "derecha" :
        {

            this.jugador.setVelocityX(100);             // El jugador se desplaza a 100 unidades en X hacia la derecha.
            this.jugador.setVelocityY(0);              //  El desplazamiento en Y se anula en cero, de lo contrario se produce un movimiento hacia la derecha y en diagonal.
            this.jugador.rotation = -300;               // Gira la imagen del jugador -300 unidades en X hacia la derecha (la serpiente mira hacia la derecha).
        }


        else if (this.cursors.up.isDown)          // Si se presiona la tecla "arriba" :
        {

            this.jugador.setVelocityY(-100);        // El jugador se desplaza a -100 unidades en Y hacia arriba.
            this.jugador.setVelocityX(0);          //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia arriba y en diagonal.
            this.jugador.rotation = 0;              // Como la imagen inicial de la serpiente (Jugador) mira hacia arriba, se establece la rotacion en 0 de esta forma devuelve a la posicion incial cuando se presione la tecla arriba.

        }

        if (this.cursors.down.isDown)            // Si se presiona la tecla "abajo" :
        {

            this.jugador.setVelocityY(100);         // El jugador se desplaza a -100 unidades en Y hacia abajo.
            this.jugador.setVelocityX(0);          //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia abajo y en diagonal.
            this.jugador.rotation = 600;            // Gira la imagen de la serpiente 600 unidades en Y es decir  hacia abajo (la serpiente mira hacia  abajo cuando presionamos la tecla abajo).


        }

    }


    frutaColision(jugador, grupo) {

        grupo.disableBody(true, true);                 // Si se produce una colision entre el objeto jugador y los objetos uva, estos ultimos se destruyen.
        this.score++;
        this.scoreText.setText('SCORE: ' + this.score);
        this.comidaSound.play()

        if (this.grupo.countActive() === 0) {
            this.mostrarGameOver();

        }

    }



    init() {

        this.score = 0;                   // Inicializa el Marcador Score en 0.


    }


    paredColision() {

        this.golpeSound.play()
        this.mostrarGameOver();

    }

    mostrarGameOver() {
        this.scene.start('GameOver');
    }
}


export default NivelUno;