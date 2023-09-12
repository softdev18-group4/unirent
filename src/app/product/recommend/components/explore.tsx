import ExploreCard from "./cards/exploreCard";

function Explore() {
  return (
    <div className="pb-5">
      <div className="font-extrabold pb-5 text-lg ">Explore</div>
      <div className="flex">
        <ExploreCard></ExploreCard>
        <ExploreCard></ExploreCard>
      </div>
    </div>
  );
}
export default Explore;
