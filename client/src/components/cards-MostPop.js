function CardMost() {
    return (
      <section className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 mb-5 px-4">
        <div className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Product"
              className="h-40 w-full object-cover rounded-t-xl"
            />
            <div className="px-4 py-3">
              <div className="flex flex-col items-start gap-4 p-2">
                <p className="text-lg font-bold text-black truncate block capitalize">Full Name</p>
                <div className="flex gap-x-1">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-solid fa-star text-yellow-500"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  }
  
  export default CardMost;
  