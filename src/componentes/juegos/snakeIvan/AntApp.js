
import Phaser from 'phaser';
import { useEffect, useState } from 'react';
import Preloader from './componentes/Preloader';
import NivelUno from './componentes/NivelUno';
import { GameOver } from './componentes/GameOver';
import { Menu } from './componentes/Menu';
import { YouWin } from './componentes/Victoria';
import NivelDos from './componentes/NivelDos';
function App() {
    const [listo, setListo] = useState(false);
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 1300,                                            // Ancho de la pantalla
            height: 700,                                            // Altura de la pantalla
            scale: {
            },
            scene: [Menu, Preloader, NivelUno, NivelDos, GameOver, YouWin],
            physics: {                                             // Habilita las fisicas del juego.
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
