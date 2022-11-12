
import Phaser from 'phaser';
import { useEffect, useState } from 'react';
import Preloader from './componentes/Preloader';

import NivelUno from './componentes/NivelUno';
import { GameOver } from './componentes/GameOver';


function App() {

    const [listo, setListo] = useState(false);

    useEffect(() => {

        const config = {
            type: Phaser.AUTO,
            width: 1300,                                            // Ancho de la pantalla
            height: 700,
            scale: {

            },                                          // Altura de la pantalla
            scene: [Preloader, NivelUno, GameOver],
            physics: {                                          // se habilita las fisicas del juego.
                default: 'arcade',
                arcade: {

                }

            }

        };

        const game = new Phaser.Game(config);
        game.events.on("LISTO", setListo)

        return () => {

            setListo(false);
            game.destroy(true);

        }
    }, [listo]);

}

export default App;
