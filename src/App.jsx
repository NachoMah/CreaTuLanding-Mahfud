import './App.css'
import NavBarBS from "./components/NavBarBS";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorComodin from './components/ErrorComodin';

function App() {

  const bienvenida = "Bienvenido a Star Wars Store!";
  const introduccion = "Explorá productos de una galaxia muy muy lejana"
  const fuerza = "¡Que la Fuerza te acompañe!"

  return (
    <BrowserRouter>
      <NavBarBS/>

      <Routes>

        <Route path="/" element = {<ItemListContainer 
          bienvenida={bienvenida}
          introduccion={introduccion}
          fuerza={fuerza}/>}  
        />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<ErrorComodin/>} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
