 import Mandi from '../assets/image/FOODCARMANDHI.png'
 import cake from '../assets/image/black-forest-cake.jpg'
 import Juices  from "../assets/image/download.jpg"
     const splfood=[{
        id:1,
    img:Mandi,
    Name:"MANDI"  
},
{
    id:2,
    img:cake,
    Name:"CAKE"
},
{
   id:3,
    img:Juices,
    Name:"JUICES"
}

]
//    <div className='h-[200px] w-[150px] 'style={{backgroundImage :`url(${val.img})`, back}} ></div>
function Frontfoodcard(){

    return (
     
        <div className='text-center pt-4'>
            <h2 >Top Products</h2>
        <div className='flex  items-center justify-center py-4 flex-wrap '>
            
   {splfood.map((val)=>{
   return <div key={val.id} className=" grid px-3 py-3  w-60 ml-3 text-center  gap-2  border-2 border-solid border-[#dedfdf]" >  
  
    <img src={val.img} className='object-cover h-37.5 w-full ' alt="" />
   
    <h2 >{val.Name}</h2>
    </div>
 
  
   })}
   </div>
   
</div>

    
    )
}

export default Frontfoodcard