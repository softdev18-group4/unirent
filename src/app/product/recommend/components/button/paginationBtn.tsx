function PaginaionBtn({ number }: { number: string }) {
  return (
    <div className="cursor-pointer w-10 h-10 mx-2 drop-shadow-sm rounded-lg text-gray-600 bg-white flex items-center justify-center hover:bg-[color:var(--theme-color2)]">
      {number}
    </div>
  );
}
export default PaginaionBtn;
