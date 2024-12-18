function Card(){
    return(
<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <div className="w-[25rem] lg:w-[25rem] md:w-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-[30rem] object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
               
                <div className="flex flex-col items-start gap-4 p-2">
                <p className="text-lg font-bold text-black truncate block capitalize">Full Name</p>
                <div className="flex  gap-x-1">

                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star-half-stroke text-yellow-500"></i>
                </div>
                </div>
            </div>
        </a>
    </div>
    <div className="w-[25rem] lg:w-[25rem] md:w-[20rem] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-[30rem] object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
               
                <div className="flex flex-col items-start gap-4 p-2">
                <p className="text-lg font-bold text-black truncate block capitalize">Full Name</p>
                <div className="flex  gap-x-1">

                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                </div>
                </div>
            </div>
        </a>
    </div>
    <div className="w-[25rem] lg:w-[25rem] bg-white md:w-[20rem] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-[30rem] object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
               
                <div className="flex flex-col items-start gap-4 p-2">
                <p className="text-lg font-bold text-black truncate block capitalize">Full Name</p>
                <div className="flex  gap-x-1">

                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                </div>
                </div>
            </div>
        </a>
    </div>
    

</section>



    )
}

export default Card