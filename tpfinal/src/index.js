import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import MemoriaApp from './componentes/juegos/memoriaEzequiel/MemoriaApp'
import AntApp from './componentes/juegos/snakeIvan/AntApp'
import AntHenryApp from './componentes/juegos/componenteJuego/AntHenryApp'
import AppDude from './componentes/juegos/memoriaEzequiel/MemoriaApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppDude/>
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

