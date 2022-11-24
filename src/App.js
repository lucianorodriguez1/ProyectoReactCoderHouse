import './App.css';
import NavBar from './containers/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./containers/Cart"
import CartContextProvider from "./context/CartContext"



const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={ <ItemListContainer />}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />} />
      </Routes>
     
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
