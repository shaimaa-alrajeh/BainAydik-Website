import Card from "./components/cards-Employee"
import CardMost from "./components/cards-MostPop"
import SectionPop from "./components/section-MostPop"

function MostPopular()
{
        const catigory = [
          "Carpentry",
          "Blacksmithing",
          "Plumbing",
          "Home Appliance Repair",
          "paintingDesign",
          "programing",
          "Marketing",
          "Motion / Video Editing",
          "Artificial intelligence",
        ];

    return (
      <div className="bg-[#252525] p-10 flex flex-col min-h-screen px-20 text-2xl font-semibold gap-y-24 ">
        {catigory.map((item, index) => (
          <SectionPop key={index} item={item} />
        ))}
      </div>
    );
}

export default  MostPopular