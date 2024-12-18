import CardMost from "./cards-MostPop";
function SectionPop(props) {
  return (
    <section className="flex flex-col w-full items-start gap-y-4">
      <h1 className="text-[#2E90EB]">{props.item}</h1>
      <div className="w-full bg-slate-50/30 p-10 rounded-lg">
        <CardMost />
      </div>
    </section>
  );
}
export default SectionPop;
