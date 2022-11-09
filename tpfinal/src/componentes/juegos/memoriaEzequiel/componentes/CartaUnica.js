import "../cssEzequiel/CartaUnica.css"

export default function CartaUnica({carta, resolverEleccion}){
    
    const resolverClick = () => {
        resolverEleccion(carta)
    }
    
    
    return(
        <div className = "carta">
            <div>
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