// import Navbar from './components/navbar'
// import Footer from './components/dark-footer'
// import SecondPage from './secondpage'
// // import White from './components/white'
// // import Dark from './components/dark'
// import CardH from './components/housecard'

// function Design(){
//     return(
//         <div className="bg-[#242424] flex flex-col">
//         {/* <Navbar/> */}
//         <SecondPage/>
      
//         {/* Marketing Section */}
//         <div className="bg-[#D9D9D9] rounded-br-[180px] rounded-tl-[180px] flex justify-center items-center flex-col gap-10 py-14">
//           <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#2E90EB]">
//             <b>Marketing</b>
//           </h3>
//           <div className="w-full sm:w-[80%] lg:w-[70%] p-8 sm:p-10 lg:p-14 bg-[#242424] rounded-[30px] flex justify-center items-center">
//             <CardH/>
//           </div>
//         </div>
      
//         {/* Programming Section */}
//         <div className="w-full h-auto sm:h-[80vh] flex justify-center items-center flex-col py-10">
//           <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 text-[#E0B75A]">
//             <b>Programming</b>
//           </h3>
//           <div className="w-full sm:w-[80%] lg:w-[70%] h-auto sm:h-[60%] bg-[#505050] rounded-[30px] flex justify-center items-center">
//             <CardH/>
//           </div>
//         </div>
      
//         {/* AI Section */}
//         <div className="bg-[#D9D9D9] rounded-br-[180px] rounded-tl-[180px] flex justify-center items-center flex-col gap-10 py-14">
//           <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#2E90EB]">
//             <b>Artificial Intelligence</b>
//           </h3>
//           <div className="w-full sm:w-[80%] lg:w-[70%] p-8 sm:p-10 lg:p-14 bg-[#242424] rounded-[30px] flex justify-center items-center">
//             <CardH/>
//           </div>
//         </div>
      
//         {/* Motion / Video Editing Section */}
//         <div className="w-full h-auto sm:h-[80vh] flex justify-center items-center flex-col py-10">
//           <h3 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 text-[#E0B75A]">
//             <b>Motion / Video Editing</b>
//           </h3>
//           <div className="w-full sm:w-[80%] lg:w-[70%] h-auto sm:h-[60%] bg-[#505050] rounded-[30px] flex justify-center items-center">
//             <CardH/>
//           </div>
//         </div>
      
//         {/* UI/UX Section */}
//         <div className="bg-[#D9D9D9] rounded-tr-[180px] flex justify-center items-center flex-col gap-10 py-14">
//           <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#2E90EB]">
//             <b>UI/UX</b>
//           </h3>
//           <div className="w-full sm:w-[80%] lg:w-[70%] p-8 sm:p-10 lg:p-14 bg-[#242424] rounded-[30px] flex justify-center items-center">
//             <CardH/>
//           </div>
//         </div>
      
//         <Footer/>
//       </div>
      

//     )
// }
// export default Design

import Footer from './components/dark-footer';
import SecondPage from './secondpage';
import CardH from './components/housecard';
import { useNavigate } from 'react-router-dom';

function Design() {
    const navigate = useNavigate();

    const sections = [
        { name: 'Marketing', path: '/EmployeeMarketing', color: '#2E90EB', bg: '#D9D9D9' },
        { name: 'Programming', path: '/EmployeePrograming', color: '#E0B75A', bg: '#505050' },
        { name: 'Artificial Intelligence', path: '/EmployeeAI', color: '#2E90EB', bg: '#D9D9D9' },
        { name: 'Motion / Video Editing', path: '/EmployeeMotion', color: '#E0B75A', bg: '#505050' },
        { name: 'UI/UX', path: '/employeeUi', color: '#2E90EB', bg: '#D9D9D9' },
    ];

    return (
        <div className="bg-[#242424] flex flex-col">
            <SecondPage />
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`flex justify-center items-center flex-col gap-10 py-14 ${
                        index % 2 === 0 ? 'rounded-br-[180px] rounded-tl-[180px]' : ''
                    }`}
                    style={{ backgroundColor: section.bg }}
                >
                    <h3
                        className={`text-3xl sm:text-4xl lg:text-5xl cursor-pointer`}
                        style={{ color: section.color }}
                        onClick={() => navigate(section.path)}
                    >
                        <b>{section.name}</b>
                    </h3>
                    <div
                        className={`w-full sm:w-[80%] lg:w-[70%] ${
                            index % 2 === 0 ? 'p-8 sm:p-10 lg:p-14' : 'h-auto sm:h-[60%]'
                        } bg-[#242424] rounded-[30px] flex justify-center items-center`}
                    >
                        <CardH />
                    </div>
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default Design;