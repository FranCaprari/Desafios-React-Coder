import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"


function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Bienvenido a BodyBest" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
