function ExploreCard({
  id,
  description,
  imgSrc,
  grow,
}: {
  id: number;
  description: string;
  imgSrc: string;
  grow: number;
}) {
  return (
    <div className={`grow-[${grow}] drop-shadow h-48 bg-white rounded-lg `}>
      <div className="flex items-center justify-center w-full h-full aspect-square">
        <img
          src={imgSrc}
          width={2000}
          height={2000}
          alt="Picture of ads"
          className="w-full h-full rounded-md"
        />
      </div>
    </div>
  );
}
export default ExploreCard;
