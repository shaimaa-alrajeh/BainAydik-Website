import SectionPop from "./components/section-MostPop";
import CardMost from "./components/cards-MostPop";
function MostPopHome()
{
    
  return (
    <div className="bg-[#252525] p-5 sm:p-10 lg:p-20 flex flex-col min-h-screen text-xl sm:text-2xl lg:text-3xl font-semibold gap-y-12 sm:gap-y-16 lg:gap-y-24">
  <SectionPop item="Most Popular Service" />
</div>

  );
}
export default MostPopHome;
