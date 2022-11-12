import Header from "./componentes/Header";
import { Routes, Route } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import MenuPhaser from "./componentes/MenuPhaser";
import MenuReact from "./componentes/MenuReact";
import Desarrollador from "./componentes/Desarrollador";
import Arkanoid from "./componentes/juegos/Arkanoid/Arkanoid";
import Juego from "./componentes/juegos/PiedraPapelTijera/Juego";
import Hangman from "./componentes/juegos/hangmanFuncion/Hangman";
import MemoriaApp from "./componentes/juegos/memoriaEzequiel/MemoriaApp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/menuphaser" element={<MenuPhaser />} />
        <Route path="/menureact" element={<MenuReact />} />
        <Route path="/desarrollador" element={<Desarrollador />} />
        <Route path="/juegoarkaoid" element={<Arkanoid />} />
        <Route path="/juegoppt" element={<Juego />} />
        <Route path="/juegoahorcadito" element={<Hangman />} />
        <Route path="/memoriaapp" element={<MemoriaApp />} />
      </Routes>
    </div>
  );
}

export default App;
