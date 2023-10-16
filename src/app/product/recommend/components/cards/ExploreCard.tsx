function ExploreCard({ id, description }: { id: number; description: string }) {
  return (
    <div className="grow drop-shadow h-36 bg-white p-3 rounded-lg cursor-pointer ">
      <div className="flex items-center justify-center h-full">
        {description}
      </div>
    </div>
  );
}
export default ExploreCard;
