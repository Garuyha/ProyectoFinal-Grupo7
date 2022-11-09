import Header from './componentes/Header'
import { Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import MenuReact from './componentes/MenuReact';
import Desarrollador from './componentes/Desarrollador'
import Juego from './componentes/juegos/PiedraPapelTijera/Juego'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/menureact' element={<MenuReact/>}/>
        <Route path='/desarrollador' element={<Desarrollador />}/>
        <Route path= '/juegoppt' element={<Juego/>}/>
      </Routes>
    </div>
  );
}

export default App;
