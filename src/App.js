import logo from './logo.svg';
import './App.css';
import ComponenteAb from './components/componenteA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Clock from './ejercicio456/ejercicio';
import EjercicioPropio from './ejercicio456/EjercicioPropio';
import ManoPropia from './ejercicio456/ManoPropia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponenteAb/> */}
        {/* <Ejemplo1/> */}
        {/** ejemplo de useState, useEffect, useRef */}
        {/* <Ejemplo2/> */}
        {/* <Ejemplo3/> */}
        {/* <Ejemplo4 nombre='Gabriel'>
          
          <h3>
            Este contenido es pintado por el props.children
            </h3>
        </Ejemplo4> */}
        {/* <Clock/> */}
        {/* <EjercicioPropio/> */}
        {/* Ejercicio casero desde 0 */}
        <ManoPropia/>
      </header>
    </div>
  );
}

export default App;
