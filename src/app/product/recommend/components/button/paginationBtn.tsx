function PaginaionBtn({
  number,
  ishighlight,
  childSetPage,
}: {
  number: number;
  ishighlight: boolean;
  childSetPage: (page: number) => void;
}) {
  var txt: string = "";
  if (number == -1) {
    txt = "...";
  } else txt = number.toString();
  return (
    <div>
      {ishighlight ? (
        <div
          onClick={(e) => {
            if (number != -1) childSetPage(number);
          }}
          className="cursor-pointer w-10 h-10 mx-2 drop-shadow-sm rounded-lg text-gray-600 bg-[color:var(--theme-color2)] flex items-center justify-center"
        >
          {txt}
        </div>
      ) : (
        <div
          onClick={(e) => {
            if (number != -1) childSetPage(number);
          }}
          className="cursor-pointer w-10 h-10 mx-2 drop-shadow-sm rounded-lg text-gray-600 bg-white flex items-center justify-center hover:bg-[color:var(--theme-color2)]"
        >
          {txt}
        </div>
      )}
    </div>
  );
}
export default PaginaionBtn;
