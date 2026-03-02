import { Link } from 'react-router-dom';
import bgImage from '../assets/image/bg.png'
function Login(){

    return (
      <div className="w-screen h-screen flex  justify-center items-center  bg-cover" style={{backgroundImage:`url(${bgImage})`}}>

        <section className="flex justify-around items-center  flex-col w-3xl h-10/14 border-t-4 border-t-[#161515] border-b-4 border-b-[#161515] 
        pt-1.5 ">
          <h1 className="text-[#111224] font-medium text-5xl">User Login</h1>
            <form action=""  className="flex flex-col  gap-12 ">
                  
            <input type="text" className="w-130 bg-amber-100 h-12" placeholder="Enter your name " />
              <input type="number" className="w-130 bg-amber-100 h-12" placeholder="Enter your number" />
                  
            </form>
                
             <button className="w-3xs h-10 font-bold bg-[#e4e6a2] ">LOGIN</button>
               <p>Not a member?  <Link to='/singup'>Sign Up now</Link></p>
        </section>

      </div>
    )

} 

export default Login