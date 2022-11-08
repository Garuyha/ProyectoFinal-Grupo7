import Header from './componentes/Header'
import { Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import MenuReact from './componentes/MenuReact';
import Desarrollador from './componentes/Desarrollador'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/menureact' element={<MenuReact/>}/>
        <Route path='/desarrollador' element={<Desarrollador />}/>
      </Routes>
    </div>
  );
}

export default App;
