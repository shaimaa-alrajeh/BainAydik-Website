import Group from './Photo/Group.png';
import logo from './Photo/logo.png';

function AboutUs(){
    return(
        <body className="font-sans antialiased text-white leading-normal tracking-wider bg-cover bg-[#242424] flex flex-col ">


<section className="py-10 bg-[#242425] sm:py-16 lg:py-24 mt-12 ">
        <div className=" ml-[17%]">
            <h1 className=" text-[#E0B75A] font-bold uppercase  "> 🔵 About us</h1>
        </div>
        <div className=" ml-[77%]">
        <img   src={logo} loading="lazy" alt="Logo"></img>
        </div>
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-6 ">

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-10 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                <div className="flex items-start  md:px-10 rounded-md border-neutral-900 bg-neutral-900/30">
                <svg className="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black dark:text-slate-50">Heading 1</h3>
                        <p className="mt-4  mb-5 text-base text-gray-600 dark:text-slate-300">Lorem ipsum dolor sit amet,  interdum a suscipit et, consequat nec nibh. Lorem ipsum dolor sit amet,  interdum .</p>
                    </div>
                </div>

                <div className="flex items-start  md:px-10 rounded-md border-neutral-900 bg-neutral-700/30">
                    <svg className="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black dark:text-slate-50">Heading 2</h3>
                        <p className="mt-4 mb-5 text-base text-gray-600 dark:text-slate-300">Lorem ipsum dolor sit amet,  interdum a suscipit et, consequat nec nibh. Lorem ipsum dolor sit amet,  interdum .</p>
                    </div>
                </div>

                <div className="flex items-start  md:px-10 rounded-md border-neutral-900 bg-neutral-200">
                <svg className="flex-shrink-0 text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-5">
                        <h3 className="text-xl font-semibold text-black dark:text-slate-950">Heading 3</h3>
                        <p className="mt-4 mb-5 text-black">Lorem ipsum dolor sit amet,  interdum a suscipit et, consequat nec nibh. Lorem ipsum dolor sit amet,  interdum .</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-3">
            <a href="/">
                <img src={Group} loading="lazy"  alt="Group" />
            </a>
            </div>
        </div>
    </div>
</section>

</body>

)}

export default AboutUs;