import "./css/Inicio.css";

function Inicio() {
  return (
    <div className="body">
      <h1 className="empresa"> MATE CEBADO ENTERTAINMENT</h1>
      <p className="evilapartado">
        Página creada puramente para fines educativos del grupo 7
      </p>
      <img src="./img/whiteman1.jpg" alt="" className="imageInicio" />
      <div className="textoinicio">
        <p className="tituloInicio">JUEGOS CEBADOS</p>
        <p className="parrafoInicio">
          Juegos Cebados es una pagina desarrollada por los miembros del grupo 7
          de la materia de Desarrollo Web. La página costa del inicio, un menú
          que redirecciona a los juegos hechos por Phaser, otro a los juegos
          creados por React y por último a la página de Desarrolladores en donde
          se ubican los miembros del equipo.
        </p>
        <div className="contenedorimgInicio">
          <img src="./img/whiteman2.jpg" alt="" className="imagenInicio" />
        </div>
        <p className="tituloInicio">JUEGOS PARA TODA LA FAMILIA</p>
        <p className="parrafoInicio">
          En esta página encontras juegos casuales y entrenidos, con juegos
          conocidos como el Arkanoid y juego creados propiamente por el grupo
          como el Hungry Ant. También encontraras juegos simples pero no
          aburridos como lo son el Ahorcadito o el Memomry Card además de
          agradables diseños que vienen con estos. Entonces ¿Qué esperas? ¡Ve a
          nuestro apartado de juegos y ven a jugar!
        </p>
        <div className="contenedorimgInicio">
          <img src="./img/whiteman3.jpg" alt="" className="imagenInicio" />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
