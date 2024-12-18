import  CardH from './housecard'
function Dark(){
    return(
        <div className="w-full h-auto sm:h-[80vh] flex justify-center items-center flex-col py-8 sm:py-10 lg:py-14">
  <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-10 text-[#E0B75A]">
    <b>Blacksmithing</b>
  </h3>
  <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto sm:h-[60%] lg:h-[50%] bg-[#505050] rounded-[30px] flex justify-center items-center">
    <CardH />
  </div>
</div>

    )
}
export default Dark