import  CardH from './housecard'
function White (){
    return(
        <div className='bg-[#D9D9D9] rounded-bl-[180px] rounded-tr-[180px]   flex justify-center items-center flex-col  gap-10 py-14' >
        <h3 className='text-5xl text-[#2E90EB]'><b>Carpentry</b></h3>
        <div className='w-[80%]  p-14 bg-[#242424] rounded-[30px] flex justify-center items-center  '>
            <CardH/>
        </div>
    </div>
    )
}
export default White