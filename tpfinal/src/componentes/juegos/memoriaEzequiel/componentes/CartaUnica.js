import "../cssEzequiel/CartaUnica.css"

export default function CartaUnica({carta, resolverEleccion, volteada, desabilitada}){
    
    const resolverClick = () => {
        if(!desabilitada){
            resolverEleccion(carta)
        }
    }
    
    
    return(
        <div className = "carta">
            <div className ={volteada ? "volteada" : "noVolteada"}>
                <img className = "frente" src ={carta.src} alt = "frente carta"/>
                
                <img 
                    className = "atras" 
                    src = "./assetsEzequiel/cover.png" 
                    onClick={resolverClick} 
                    alt = "atras carta"/>
            </div>
        </div>
    )
}