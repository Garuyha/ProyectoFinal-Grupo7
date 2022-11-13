
import Phaser from "phaser";
/*/ Constructor de la escena     /*/
class NivelUno extends Phaser.Scene {
    constructor() {
        super('NivelUno');          // Identificador o key  de la escena.
    }
    /*/ Metodo preload, precarga imagenes y sonidos desde sus directorios /*/
    preload() {
        // Imagenes//
        this.load.image('hormiga', './imagenes/hormiga.png');
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
        this.load.image('flechas', './imagenes/flechas.png');
        this.load.image('cesta', './imagenes/cesta.png');
        // Musica y sonidos//
        this.load.audio('comida', './musica/comida.mp3');
        this.load.audio('golpe', './musica/golpe.mp3');
        this.load.audio('score', './musica/score.mp3');
        this.load.audio('pou', './musica/pou.mp3');
        this.load.audio('ninios', './musica/ninios.mp3');
        this.load.audio('sonidovictoria', './musica/sonidovictoria.mp3');

    }
    /*/ Metodo Create, crea imagenes ,sonidos odesde sus identificadores, tambien se crean variables /*/

    create() {
        // Creacion del jugador su fisica y colisiones//
        this.add.image(1230, 350, 'flechas');
        this.add.image(1210, 70, 'cesta');
        this.add.image(510, 350, 'fondoescena');                                        // Se crea el fondo para la escena.
        this.jugador = this.physics.add.image(650, 500, 'hormiga').setImmovable();    // La variable y palabra reservada jugador se encarga de guardar a la imagen del jugador con su posicion en la pantalla, ademas se la establece como  Inamovible es decir permancera quieta amenos que se produzca un movimiento.
        this.jugador.setCollideWorldBounds(true);                                   // Impide que el jugador se salga del rango de la pantalla, este choca con los bordes.
        this.cursors = this.input.keyboard.createCursorKeys();                    // Se  crea un input o entrada de registro para las teclas presionadas.
        // Creacion de las imagenes y del grupo de objetos 'frutas' //
        this.grupo = this.physics.add.staticGroup();     // Se añade fisicas a los objetos frutas y estos permanecen  estaticos.
        this.grupo.create(140, 250, 'uva');
        this.grupo.create(140, 70, 'uva');
        this.grupo.create(140, 170, 'uva');
        this.grupo.create(140, 460, 'uva');                // Creacion objeto uva.
        this.grupo.create(140, 540, 'uva');
        this.grupo.create(140, 630, 'uva');

        this.grupo.create(324, 250, 'naranja');
        this.grupo.create(324, 70, 'naranja');
        this.grupo.create(324, 170, 'naranja');             // Creacion objeto naranja.
        this.grupo.create(324, 460, 'naranja');
        this.grupo.create(324, 530, 'naranja');
        this.grupo.create(324, 600, 'naranja');

        this.grupo.create(365, 250, 'banana');
        this.grupo.create(365, 70, 'banana');
        this.grupo.create(365, 170, 'banana');
        this.grupo.create(365, 460, 'banana');             // Creacion objeto banana.
        this.grupo.create(750, 70, 'banana');
        this.grupo.create(750, 170, 'banana');
        this.grupo.create(750, 100, 'banana');

        this.grupo.create(420, 250, 'anana');
        this.grupo.create(420, 70, 'anana');
        this.grupo.create(420, 170, 'anana');              // Creacion objeto anana.
        this.grupo.create(420, 460, 'anana');
        this.grupo.create(420, 540, 'anana');
        this.grupo.create(420, 600, 'anana');

        this.grupo.create(630, 250, 'ciruela');
        this.grupo.create(630, 70, 'ciruela');           // Creacion objeto ciruela.
        this.grupo.create(630, 170, 'ciruela');

        this.grupo.create(1000, 250, 'sandia');
        this.grupo.create(1000, 70, 'sandia');
        this.grupo.create(1000, 170, 'sandia');
        this.grupo.create(1000, 355, 'sandia');          // Creacion objeto sandia.
        this.grupo.create(1000, 460, 'sandia');
        this.grupo.create(1000, 540, 'sandia');

        this.grupo.create(1095, 250, 'limon');
        this.grupo.create(1095, 70, 'limon');
        this.grupo.create(1095, 170, 'limon');
        this.grupo.create(1095, 355, 'limon');           // Creacion objeto limon.
        this.grupo.create(1095, 460, 'limon');
        this.grupo.create(1095, 540, 'limon');
        this.grupo.create(1095, 600, 'limon');

        this.grupo.create(900, 250, 'durazno');
        this.grupo.create(900, 70, 'durazno');
        this.grupo.create(900, 170, 'durazno');          // Creacion objeto durazno.
        this.grupo.create(900, 355, 'durazno');
        this.grupo.create(900, 460, 'durazno');
        this.grupo.create(900, 540, 'durazno');

        this.grupo.create(820, 70, 'manzana');
        this.grupo.create(605, 475, 'manzana');
        this.grupo.create(605, 550, 'manzana');
        this.grupo.create(680, 550, 'manzana');
        this.grupo.create(70, 250, 'manzana');            // Creacion objeto manzana.
        this.grupo.create(70, 70, 'manzana');
        this.grupo.create(70, 170, 'manzana');
        this.grupo.create(70, 460, 'manzana');
        this.grupo.create(70, 540, 'manzana');
        this.physics.add.collider(this.jugador, this.grupo, this.frutaColision, null, this);  //  Se añade la funcion de colision a los objetos establecidos en los parametros.

        // Creacion de la musica y sonidos//
        this.comidaSound = this.sound.add('comida');
        this.golpeSound = this.sound.add('golpe');
        this.scoreSound = this.sound.add('score');
        this.pouSound = this.sound.add('pou');
        this.niniosSound = this.sound.add('ninios');
        this.victoriaSound = this.sound.add('sonidovictoria');
        // Creacion del mapa y fisicas del mismo //
        this.map = this.add.tilemap('tiles');                          // Se crea una variable que contendra el archivo json con las coordenadas de las texturas.
        var tileset = this.map.addTilesetImage("grass", "grass");     // Se crea una variable que invocara a la imagen con las texturas.
        var solidos = this.map.createStaticLayer("bordes", tileset);  //  Se crea una capa de textura extraida desde el archivo json.
        solidos.setCollisionByProperty({ solido: true })                                    // Toma en cuenta las propiedades definidas para las capas de textura  en el json del mapa
        this.physics.add.collider(this.jugador, solidos, this.paredColision, null, this)   // Aplica colision entre el jugador y las capas de texturas.
        // Muestra un texto Score en pantalla  //
        this.scoreText = this.add.text(1233, 64, 'X 0', {
            fontSize: '18px',
            fill: 'yellow',
            fontFamily: 'Franklin Gothic Medium',

        });
        // Muestra un texto en pantalla  //
        this.add.text(1176, 280, 'DAR DIRECCION', {
            fontSize: '16px',
            fill: 'yellow',
            fontFamily: 'Franklin Gothic Medium',
        });
    }
    /*/ Metodo update/*/
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
            this.jugador.rotation = 0;              // Como la imagen inicial de la hormiga (Jugador) mira hacia arriba, se establece la rotacion en 0 de esta forma devuelve a la posicion incial cuando se presione la tecla arriba.
        }
        if (this.cursors.down.isDown)            // Si se presiona la tecla "abajo" :
        {
            this.jugador.setVelocityY(100);         // El jugador se desplaza a -100 unidades en Y hacia abajo.
            this.jugador.setVelocityX(0);          //  El desplazamiento en X se anula en cero, de lo contrario se produce un movimiento hacia abajo y en diagonal.
            this.jugador.rotation = 600;            // Gira la imagen de la hormiga 600 unidades en Y es decir  hacia abajo (la serpiente mira hacia  abajo cuando presionamos la tecla abajo).
        }
    }
    frutaColision(jugador, grupo) {
        grupo.disableBody(true, true);                            // Si se produce una colision entre el objeto jugador y el grupo , estos ultimos se destruyen.
        this.score++;                                            // Adiciona un punto al Score cada vez que se produce la colision.
        this.scoreText.setText('X ' + this.score);              // Refleja el valor actualizado del score.
        this.comidaSound.play();                               // Reproduce el sonido.
        this.scoreSound.play();                               // Reproduce el sonido.
        if (this.grupo.countActive() === 0)                  // Si la cantidad de objetos frutas que conforman el grupo es igual a 0, se cambia de escena al nivel 2
        {
            this.mostrarNivelDos();                  // Se invoca el metodo que cambiara a la escena nivel dos.
        }
    }
    /*/ Metodo int  /*/
    init() {
        this.score = 0;                   // Inicializa el Marcador Score en 0.
    }
    /*/ Metodo para la colision del jugador y las paredes  /*/

    paredColision() {
        this.golpeSound.play();          // Si el jugador colisiona con alguna de las paredes del mapa del juego, se pierde y se muestra la escena Game Over
        this.mostrarGameOver();         // Se invoca el metodo que cambiara a la escena Game Over.
    }
    /*/ Metodo que muestra la pantalla o escena Game Over  /*/
    mostrarGameOver() {
        this.scene.start('GameOver');       // Inicia la escena GameOver
        this.sound.pauseAll('musica1');    // Pausa la musica de el nivel 1
        this.golpeSound.play();          // Reproduce sonido.
        this.pouSound.play();            // Reproduce sonido.
    }
    /*/ Metodo que muestra la pantalla o escena de Victoria /*/
    mostrarPantallaVictoria() {
        this.scene.start('Victoria');       // Inicia la escena Victoria          
        this.sound.pauseAll('musica1');      // Pausa la musica de el nivel 1
        this.niniosSound.play();             // Reproduce sonido.
        this.victoriaSound.play();           // Reproduce sonido.
    }

    mostrarNivelDos() {
        this.scene.start('NivelDos');
    }

}
export default NivelUno;           // Exporta la clase.