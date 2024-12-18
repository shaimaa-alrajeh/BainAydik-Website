import housephoto from './Photo/hello.png'

function SecondPage(){
    return(
        <div className="flex justify-center flex-col items-center h-screen px-4">
        <h3 className="text-white text-4xl sm:text-6xl lg:text-8xl mt-8 sm:mt-10 lg:mt-16">
          IT & DESIGN
        </h3>
        <img src={housephoto} alt="House Photo" className="w-full sm:w-3/4 lg:w-[80%] mt-6" />
      </div>
      
    )
}

export default SecondPage