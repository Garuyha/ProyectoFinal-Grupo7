import { Fragment } from "react";
import AppArkanoid from "./AppArkanoid";
import './css/JuegoArkanoid.css'

export default function Arkanoid(){
    return(
        <Fragment>
          <div className="arkanoid">
            <AppArkanoid/>
          </div>
        </Fragment>
    );
}