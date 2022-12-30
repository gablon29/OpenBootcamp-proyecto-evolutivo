import logo from './logo.svg';
import './App.css';
import ComponenteAb from './components/componenteA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ComponenteAb/> */}
        {/* <Ejemplo1/> */}
        {/** ejemplo de useState, useEffect, useRef */}
        <Ejemplo2/>
      </header>
    </div>
  );
}

export default App;