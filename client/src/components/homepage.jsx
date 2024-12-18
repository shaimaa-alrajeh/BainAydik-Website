import { Card } from "./card"
import contact from '../Photo/contct.png'
import Footer from './dark-footer'

function Homepage(){
   

return(
    <div className=' w-[100%] h-[70vh] flex justify-center mt-8 	 '>
        <div className='  w-[100%] h-[70%] p-10 ' >

{/* card  */}
                <h2 className='text-[#356CFD] text-4xl mt-4'> <b>Our New Featured</b></h2>
              
            <div className="mt-20 flex flex-col" >
                <Card/>
                <div className='border-2 rounded border-[#E0B75A] mt-10 w-[50%] self-center '></div>
            </div>



{/* Ready to Get Started ? */}
            <div className="h-[120%] w-[100%] flex justify-center items-start">
                <div className="bg-[#242424] w-full max-w-[1000px] bg-style bg-cover  h-[70%] mt-20 rounded-lg flex flex-col justify-center items-center gap-10 px-6 sm:px-4 md:px-8  ">
                    <h2 className="text-[#E0B75A] text-3xl sm:text-2xl md:text-3xl ">Ready to Get Started ?</h2>
                    <p className="text-white text-sm sm:text-xs ">Sign Up or Login to Explore Various Features, It’s Just Free</p>
                    <a href="#">
                     <button className="bg-[#2E90EB] transition-transform duration-200 ease-in-out hover:scale-[1.03] text-white font-bold py-2 px-6 sm:px-4 rounded-md ">
                             Get Started it’s Free
                     </button>
                    </a>
                </div>
            </div>
{/* Contact Us */}
<div className="w-full h-auto sm:h-[150%] flex flex-col sm:flex-row gap-10 sm:gap-20 mb-10">
    
  
    <img src={contact} alt="Contact Us" className=" md:w-full sm-w-[50%] flex-wrap flex   rounded-lg"/>

    
    <div className="flex flex-col sm:gap-[300px] gap-10 sm:mt-0 mt-10">
        <p className="text-5xl  sm:text-7xl  text-[#E0B75A] sm:align-top">Have Some Doubts ?</p>
        <a href="#">
            <p className="text-3xl sm:text-5xl transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:underline text-[#2E90EB]">
                Contact Us
            </p>
        </a>
    </div>
</div>
 


                           
             


                   
                    
             
        <Footer/>
        </div>
    </div>


              

               

                





    )
}
export default Homepage
             
    
                

                                         