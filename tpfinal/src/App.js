import Header from './componentes/Header'
import { Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Prueba from './componentes/Prueba';
import Desarrollador from './componentes/Desarrollador'
import Juego from './componentes/juegos/PiedraPapelTijera/Juego'
import Hangman from './componentes/juegos/hangmanFuncion/Hangman'
import MemoriaApp from './componentes/juegos/memoriaEzequiel/MemoriaApp'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/menureact' element={<Prueba/>}/>
        <Route path='/desarrollador' element={<Desarrollador />}/>
        <Route path= '/juegoppt' element={<Juego/>}/>
        <Route path= '/juegoahorcadito' element={<Hangman/>}/>
        <Route path= '/memoriaapp' element={<MemoriaApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
