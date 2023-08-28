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
import Additem from "./components/Additem";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";


function App() {

  const Dispatch = useDispatch()

  useEffect(() => {
    console.log(Dispatch(fetchProducts()))       
 }, [Dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
      <Head /> 
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/add" element={<Additem/>}/>
        <Route path="/mens" element={<Mens />}/>
        <Route path="/womens" element={<Womens />}/>
        <Route path="/electronics" element={<Electronics />}/>
        <Route path="/jewelery" element={<Jewelery />}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
