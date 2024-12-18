import Card from '../cardAyham';
import contact from '../Photo/contct.png';
import Footer from './dark-footer';

function FeatureAndContactHome() {
  return (
    <div className="w-full h-auto flex justify-center mt-8">
      <div className="w-full max-w-screen-xl p-6 sm:p-10">

        {/* Featured Card */}
        <h2 className="text-[#356CFD] text-4xl sm:text-5xl mt-4 text-center">
          <b>Our New Featured</b>
        </h2>
        <div className="mt-12 sm:mt-20 flex flex-col items-center">
          <Card />
          <div className="border-2 rounded border-[#E0B75A] mt-10 w-3/4 sm:w-1/2 self-center"></div>
        </div>

        {/* Ready to Get Started */}
        <div className="w-full flex justify-center items-start mt-20">
          <div className="bg-[#242424] w-full max-w-screen-lg bg-cover h-auto sm:h-[70%] mt-20 rounded-lg flex flex-col justify-center items-center gap-8 sm:gap-10 px-6 sm:px-4 md:px-8 py-10">
            <h2 className="text-[#E0B75A] text-3xl sm:text-2xl md:text-3xl text-center">
              Ready to Get Started?
            </h2>
            <p className="text-white text-sm sm:text-xs text-center">
              Sign Up or Login to Explore Various Features, It’s Just Free
            </p>
            <a href="#signup">
              <button className="bg-[#2E90EB] transition-transform duration-200 ease-in-out hover:scale-[1.03] text-white font-bold py-2 px-6 sm:px-4 rounded-md">
                Get Started, It’s Free
              </button>
            </a>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-20 items-center sm:items-start my-10">
          <img
            src={contact}
            alt="Contact Us"
            className="w-full sm:w-1/2 rounded-lg shadow-md"
          />
          <div className="flex flex-col sm:gap-[40px] gap-8 sm:mt-0 mt-6 text-center sm:text-left">
            <p className="text-5xl sm:text-7xl text-[#E0B75A]">
              Have Some Doubts?
            </p>
            <a href="#contact">
              <p className="text-3xl sm:text-5xl transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:underline text-[#2E90EB]">
                Contact Us
              </p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default FeatureAndContactHome;
