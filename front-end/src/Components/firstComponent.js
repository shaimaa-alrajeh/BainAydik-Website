import housephoto from '../Photo/house.png'

function FirstPage(){
    return(
        <div className="flex justify-center flex-col items-center h-screen p-4">
        <h3 className="text-white text-4xl sm:text-6xl md:text-8xl mt-10 text-center">
          Household chores
        </h3>
        <img src={housephoto} alt="Household" className="w-full sm:w-3/4 md:w-2/3 lg:w-[80%] mt-6" />
      </div>
      
    )
}

export default FirstPage