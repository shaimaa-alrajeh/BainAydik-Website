import MostPopularHome from "./components/mostPopularHome";
import AboutUs from "./components/aboutUs";
import FeatureAndContactHome from './components/featureAndContactHome';
import Navbar from "./components/navbar";
import MostPopHome from './MostPopulerHomePage'

function Home() {
    return (
        <div className="font-sans antialiased text-white leading-normal tracking-wider bg-cover flex flex-col">
        <Navbar />
        
        {/* Most Popular Home */}
        <MostPopularHome />
        <MostPopHome />
        
        {/* قسم About Us */}
        <section id="about-us" className="about-us bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-8">
          <AboutUs />
        </section>
        
        <FeatureAndContactHome />
        
        {/* <WhiteFooter /> */}
      </div>
      
    );
}

export default Home;
