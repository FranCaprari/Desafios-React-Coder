import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar/> 
      <ItemListContainer greeting="Bienvenido a BodyBest" />
    </div>
  );
}

export default App;
