import ExploreCard from "./cards/exploreCard";
interface explore {
  id: number;
  description: string;
}
export const exploreList: explore[] = [
  {
    id: 1,
    description: "ยังคิดไม่ออก",
  },
  {
    id: 2,
    description: "ยังคิดไม่ออก",
  },
];
function Explore() {
  return (
    <div className="pb-5">
      <div className="cursor-default font-extrabold pb-5 text-lg ">Explore</div>
      <div className="flex gap-x-5">
        <div className="hidden md:flex grow gap-x-5">
          {exploreList.slice(0, 2).map(({ id, description }, index) => (
            <ExploreCard
              key={index}
              id={id}
              description={description}
            ></ExploreCard>
          ))}
        </div>
        <div className="md:hidden flex grow gap-x-5">
          {exploreList.slice(0, 1).map(({ id, description }, index) => (
            <ExploreCard
              key={index}
              id={id}
              description={description}
            ></ExploreCard>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Explore;
