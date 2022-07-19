import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { HashRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import CartProvider from "./context/CartContext";


function App() {
  return (
      <HashRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Bienvenido a BodyBest" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartProvider>
      </HashRouter>    
  );
}

export default App;
