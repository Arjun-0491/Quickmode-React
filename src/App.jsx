
 import {Routes,Route} from "react-router-dom"
import Login from "./component/login"
import  Singup from './component/singup'
import './App.css'

import FoodCards from "./pages/cards";
import Home from './pages/Home'


function App() {
 

  return(
    <>
     <Routes>
<Route path="/"  element={<Home />}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/singup" element={<Singup/>}></Route>
<Route path="/cards" element={<FoodCards/>}></Route>
 </Routes>
 


    </>
  )
}

export default App
