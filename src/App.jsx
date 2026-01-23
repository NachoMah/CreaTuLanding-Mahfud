import './App.css'
import NavBarBS from "./components/NavBarBS";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const bienvenida = "Bienvenido a Star Wars Store!";
  const introduccion = "Explorá productos de una galaxia muy muy lejana"
  const fuerza = "¡Que la Fuerza te acompañe!"

  return (
    <>
      <NavBarBS/>
      <ItemListContainer 
        bienvenida={bienvenida}
        introduccion={introduccion}
        fuerza={fuerza}
      />
    </>
  );
}

export default App;
