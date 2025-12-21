import './App.css'
import NavBarBS from "./components/NavBarBS";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const bienvenida = "¡Sé parte de una galaxia muy muy lejana con nuestros prodcutos!";

  return (
    <>
      <NavBarBS/>
      <ItemListContainer bienvenida={bienvenida}/>
    </>
  );
}

export default App;
