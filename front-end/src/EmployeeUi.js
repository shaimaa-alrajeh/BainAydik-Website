import Card from "./components/cards-Employee"

function EmployeeUi(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#252525] p-10 text-2xl mt-11">
            <h1 className="font-bold text-white tracking-[2px]">ui/ux Designers</h1>
            <Card/>
        </div>
    )
}
export default EmployeeUi