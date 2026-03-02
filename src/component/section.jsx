import {useState  } from "react";
import img1 from '../assets/image/sectionmadi.png'
import img2 from'../assets/image/SectionRefreshing fruit juices.png'
import img3 from '../assets/image/Section cake.png'
import img4 from '../assets/image/sectionburger.png'

function Section(){
const [index,Setindex]=useState(0)
const img=[
   
      img1,
      img2,
      img3,
      img4

]
const click=()=>{
    
    Setindex((val)=>(val+1)%img.length)
}

return( 
    
<section className=" flex h-[350px] lg:h-[520px] md:h-[450px] w-full overflow-hidden ">
{img.map((image,i)=>{
  return (
    

   <div
    key={i}
    className="h-[350px] w-[100%]  bg-cover   bg-no-repeat
    lg:h-[520px] md:h-[450px] md:object-cover
    transition-transform duration-1500  flex-shrink-0 ease-in-out   "
onClick={click}
style={{ transform :`translateX(-${index*100}%)`,
backgroundImage:`url(${image})`}}

>
</div>

)
})}


</section>

    )
}

export default Section