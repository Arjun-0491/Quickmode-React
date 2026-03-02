import {Link }from "react-router-dom"
import { useState } from "react";

function Navbar(){
    const  [open,Setopen]=useState(false)

    return(
        
<nav className=" flex justify-between text-[#f5fdf8] padding py-2 bg-[#787c7c]/40 backdrop-blur-[2px] 
border  border-white/10 rounded-xs">
     <h2 className="font-bold text-3xl ml-6">Imperial china</h2>
     <ul className="flex items-center mr-10 hidden md:flex lg:flex ">
        <li>
            <Link to="/">Home</Link></li>
        <li>
      <Link to="login"> login</Link>
       </li>
        <li>contact</li>
        <li>Services </li>
        <li>Bill</li>
     </ul>
     <button className=" lg:hidden  md:hidden flex mr-10 text-4xl"
     onClick={()=>Setopen(!open)}
     >
   ☰
     </button>
     {
        open && (
             <ul className="flex flex-col gap-4 py-4 px-4 fixed right-10 top-12 bg-[#8f8f8f]/80 backdrop:blur-[2px]">
        <li>
            <Link to="/">Home</Link></li>
        <li>
      <Link to="login"> login</Link>
       </li>
        <li>contact</li>
        <li>Services </li>
        <li>Bill</li>
     </ul>
        )
     }
</nav>

    );

}

export default Navbar;