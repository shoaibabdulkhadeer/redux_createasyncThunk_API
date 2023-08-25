// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Head from './components/Head';
import Main from './components/Main';
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./features/Product";



function App() {

  const Dispatch = useDispatch()

  useEffect(() => {
    console.log(Dispatch(fetchProducts()))       
 }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Head /> 
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
