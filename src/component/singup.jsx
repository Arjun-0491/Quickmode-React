import axios from "axios"
import {useState}from'react'
import bgImage from '../assets/image/bg.png'

function Singup(){
 
  const[name,Setname]=useState("")
  const[phone,Setphone]=useState('')
  const[password,Setpassword]=useState('')
  const[message,Setmessage]=useState("")

 const hadlesub=async (event) => {
  event.preventDefault()

  try {
    const data={name,phone,password}
    const res=await axios.post("http://localhost:3000/signup",data)
    Setmessage("signup Successful")
    Setname("")
    Setpassword("")
    Setphone("")
  } catch (error) {
    Setmessage(error)
  }
 }


   return( 
      <div className="w-screen h-screen flex  justify-center items-center  bg-cover" style={{backgroundImage:`url(${bgImage})`}}>

        <section className="flex justify-around items-center  flex-col w-3x1 h-10/14 border-t-4 border-t-[#161515] border-b-4 border-b-[#161515] 
        pt-1.5 ">
          <h1 className="text-[#111224] font-medium text-5xl">User Singup</h1>
            <form action="" onSubmit={hadlesub} className="flex  mt-5 flex-col  gap-8  items-center" >
                  <label htmlFor="">Your favorite food is just one step away</label>
            <input type="text"
            value={name}
            onChange={(e)=>Setname(e.target.value)}
            className="w-130 bg-amber-100 h-12" placeholder="Enter your name " />
              <input type="number"
              value={phone}
              onChange={(e)=>Setphone(e.target.value)}
              className="w-130 bg-amber-100 h-12" placeholder="Enter your number" />

                 <input type="text"
                   value={password}
                  onChange={(e)=>Setpassword(e.target.value)}
                 className="w-130 bg-amber-100 h-12" placeholder="Enter your Password" />
                 <input type="submit" className="w-3xs h-10 font-bold bg-[#e4e6a2]" />
                
            </form>
             
  <p>{message}</p>
        </section>

      </div>
   )
}

export default Singup