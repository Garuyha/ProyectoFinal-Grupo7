export const Resultado = (props) =>{
    let resultadoFinal;

    if(props.jugador.derrota === props.maquina.eleccion && props.jugador.eleccion){
        resultadoFinal = "Gana el Jugador";
    }else{
        if(props.maquina.derrota === props.jugador.eleccion && props.jugador.eleccion){
            resultadoFinal = "Gana la Máquina"
        }else if(props.jugador.eleccion === props.maquina.eleccion && props.jugador.eleccion){
            resultadoFinal = "Empate"
        }
    }
    return (
        <>{resultadoFinal}</>
    )
}