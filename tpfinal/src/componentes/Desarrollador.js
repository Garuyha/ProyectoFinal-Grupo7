
import React, {Fragment} from "react";
import desarrolladores from './desarrolladores.json'
import './css/Desarrollador.css'


function Desarrollador(){
  return(
<Fragment>
      {
      desarrolladores.map( desarrollador => {
        return(
          <div className='box'>
            <div className="contenedor">

              <img src = {desarrollador.img} alt ={desarrollador.nombre} className ="images"/>

              <div className="cuerpo">
              <div className="nombre">
              {desarrollador.nombre}
              </div>
                 <div className="eselultimolojuro">
                 <div  className="rol">
                   {desarrollador.rol}
                  </div>
                  <div className="apartado">
                    EDAD
                    </div>
                  <div  className="datos">
                   {desarrollador.edad}
                  </div>
                  <div className="apartado">
                    INTERESES
                    </div>
                  <div  className="datos">
                   {desarrollador.intereses}
                  </div>
                  <div className="apartado">
                    DNI
                    </div>
                  <div className="datos">
                  {desarrollador.dni}
                  </div>
                  <div className="apartado">
                    LU
                    </div>
                  <div className="datos">
                  {desarrollador.lu}
                 </div>
                 <div className="apartado">
                    Link
                    </div>
                 <div className="datos">
                  {desarrollador.gitLink}
                 </div>
                </div>
              </div>
            </div>
          </div>
        )

      }) 
    }

    </Fragment>
  )
}
export default Desarrollador;
