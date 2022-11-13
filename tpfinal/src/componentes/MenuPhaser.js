import React, { Fragment } from "react";
import juegosphaser from "./json/juegosphaser.json";
import { Link } from "react-router-dom";
import "./css/MenuReact.css";

function MenuPhaser() {
  return (
    <Fragment>
      {juegosphaser.map((juegophaser) => {
        return (
          <div className="caja" key = {juegophaser.id}>
            <div className="cajajuego">
              <div className="portadajuego">
                <img
                  src={juegophaser.imagenportada}
                  alt="No hay presupuesto para imagen :("
                  className="imagenjuego"
                />
              </div>
              <div className="infojuego">
                <h1 className="titulojuego">{juegophaser.nombrejuego}</h1>
                <div className="sipnosis">
                  <p className="t">{juegophaser.parrafouno}</p>
                  <p className="t">{juegophaser.parrafodos}</p>
                  <p className="t">{juegophaser.parrafotres}</p>
                </div>
                <Link to={juegophaser.linkto}>
                  <h3 className="botonjugar">¡CLICK AQUI PARA JUGAR! ➤</h3>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default MenuPhaser;
