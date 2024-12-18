import CardMost from "./cards-MostPop";
function SectionPop(props) {
  return (
    <section className="flex flex-col w-full items-start gap-y-4 sm:gap-y-6">
    {/* Title with responsive text size */}
    <h1 className="text-[#2E90EB] text-2xl sm:text-3xl lg:text-4xl font-semibold">
      {props.item}
    </h1>
  
    {/* Card container with responsive padding */}
    <div className="w-full bg-slate-50/30 p-6 sm:p-8 lg:p-10 rounded-lg">
      <CardMost />
    </div>
  </section>
  
  );
}
export default SectionPop;
