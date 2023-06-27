import './App.css';
import Ruta1 from './rutas/Ruta1';
import Provider from './contexto/Provider';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <div className="App">
    <Provider>
    <Ruta1/>
    </Provider>
    </div>
  );
}

export default App;
