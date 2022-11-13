import "./css/Error.css";

export default function Error() {
  return (
    <div className="errorcontainer">
      <div className="ea">
        <div className="containererrortexto">
          <p className="errorerror">ERROR 404</p>
          <p className="mensajeerror">ESTA PAGINA NO HA SIDO ENCONTRADA</p>
          <p className="textoerror">
            ¡No rompas la computadora aun! ¡hay mucho para explorar!
          </p>
        </div>
        <div className="containererrorimg">
          <img src="./img/whiteman4.jpg" alt="" className="imgerror" />
        </div>
      </div>
    </div>
  );
}
