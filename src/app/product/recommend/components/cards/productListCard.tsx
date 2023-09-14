function ProductListCard({
  id,
  imgSrc,
  name,
  description,
  price,
  period,
  rating,
}: {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
  price: string;
  period: string;
  rating: string;
}) {
  return (
    <div>
      <div className="cursor-pointer flex items-center justify-center drop-shadow-lg h-60 lg:h-80 bg-white p-3 rounded-xl">
        {name}
      </div>
    </div>
  );
}
export default ProductListCard;
