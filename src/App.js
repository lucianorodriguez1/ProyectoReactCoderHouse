import './App.css';
import NavBar from './containers/NavBar';

const App=()=> {
  return (
    <>
    <NavBar/>
    <h1 className='titulo-principal'>Productos</h1>
    <ItemListContainer />
    </>
  );
}

export default App;
