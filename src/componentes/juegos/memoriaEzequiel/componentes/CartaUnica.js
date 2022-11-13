import "../cssEzequiel/CartaUnica.css"
import {Howl, Howler} from "howler"

export default function CartaUnica({carta, resolverEleccion, volteada, desabilitada}){
    
    //Haciendo uso de la funcion pasada como propiedad, resolver elección, podemos resolver si ambas cartas son iguales o no cuando se produce
    //el evento onClik sobre el dorso de la carta.
    const resolverClick = () => {
        if(!desabilitada){
            resolverEleccion(carta)           
            SoundPlay(carta.sonido) //Cuando se elige una carta, se repoduce un sonido generico.
        }
    }
    
    //Funcion de Howl que permite la reproducción del sonido.
    const SoundPlay = (src) =>{
        const sound = new Howl({
            src
        })
        sound.play();
    }
    
    Howler.volume(0.5)

    //En el return se crea cada carta que se mostrarada en la pagina, todas volteadas y del otro lado su imagen asociada.
    return(
        <div className = "carta">
            <div className ={volteada ? "volteada" : "noVolteada"}>
                <img className = "frente" src ={carta.src} alt = "frente carta"/>
                
                <img 
                    className = "atras" 
                    src = "./assetsEzequiel/cover.png" 
                    onClick={resolverClick} //Evento onClik sobre el dorso de la carta que permite la selección, cuando se muestra el frente este evento no se puede acceder.
                    alt = "atras carta"/>
            </div>
        </div>
    )
}