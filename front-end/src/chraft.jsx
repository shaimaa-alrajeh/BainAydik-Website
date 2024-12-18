import Navbar from './components/navbar';
import Footer from './components/dark-footer';
import CardH from './components/housecard';
import housephoto from './Photo/house.png';
import { useNavigate } from 'react-router-dom';

function Chraft() {
    const navigate = useNavigate();

    const sections = [
        { name: 'Carpentry', path: '/EmployeeCarpentry', color: '#2E90EB', bg: '#D9D9D9' },
        { name: 'Blacksmithing', path: '/EmployeeBlacksmithing', color: '#E0B75A', bg: '#505050' },
        { name: 'Plumbing', path: '/EmployeePlumbing', color: '#2E90EB', bg: '#D9D9D9' },
        { name: 'Home Appliance Repair', path: '/EmployeeHome', color: '#E0B75A', bg: '#505050' },
        { name: 'Painting', path: '/EmployeePainting', color: '#2E90EB', bg: '#D9D9D9' },
    ];

    return (
        <div className="bg-[#242424] flex flex-col">
            <Navbar />
            <div className="flex justify-center flex-col items-center h-auto sm:h-screen p-4">
                <h3 className="text-white text-4xl sm:text-6xl md:text-8xl mt-10 text-center">
                    Household chores
                </h3>
                <img
                    src={housephoto}
                    alt="Household"
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-[80%] mt-6"
                />
            </div>

            {/* Sections */}
            <div className="flex flex-col gap-10">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`flex justify-center items-center flex-col gap-10 py-14 px-4 sm:px-10 ${
                            index % 2 === 0 ? 'rounded-bl-[180px] rounded-tr-[180px]' : ''
                        }`}
                        style={{ backgroundColor: section.bg }}
                    >
                        <h3
                            className={`text-3xl sm:text-4xl lg:text-5xl cursor-pointer text-center`}
                            style={{ color: section.color }}
                            onClick={() => navigate(section.path)}
                        >
                            <b>{section.name}</b>
                        </h3>
                        <div
                            className={`w-full sm:w-[80%] lg:w-[70%] ${
                                index % 2 === 0 ? 'p-14' : 'h-auto sm:h-[60%]'
                            } bg-[#242424] rounded-[30px] flex justify-center items-center`}
                        >
                            <CardH />
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Chraft;
