import Navbar from '../component/navbar'
 import Section from '../component/section'
 import Frontfoodcard from '../component/foodsection'

 import SctionContent from '../component/sectioncontent'
function Home(){

    return(
        <> 
        <div className='fixed top-0 left-0 z-50 w-full '>
        <Navbar />
        </div>
        <div className='relative '>
       <Section/>
       <div className='absolute z-50 top-25 md:top-30 lg:top-50'>
<SctionContent/>
  </div>
       </div>
       <Frontfoodcard/>
      
   </>
    )
       
}

export default Home