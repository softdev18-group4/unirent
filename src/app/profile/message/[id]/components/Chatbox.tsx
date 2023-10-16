function Chatbox({
  isleft, // if == 0 means don't show
  time,
  message,
  isRead, //-1= don't show 0=isn't read 1=readed
}: {
  isleft: boolean;
  time: string;
  message: string;
  isRead: Number;
}) {
  return isleft ? (
    <div className="flex flex-col w-full gap-1">
      <div className={time != "0" ? "text-slate-400" : "hidden"}>{time}</div>
      <div className="flex w-0">
        <div className="bg-white p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
          {message}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full items-end gap-1">
      <div className={time != "0" ? "text-slate-400" : "hidden"}>{time}</div>
      <div className="bg-white p-6 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl">
        {message}
      </div>

      <div className={isRead == -1 ? "hidden" : "text-slate-400"}>
        {isRead == 0 ? "Unread" : "Readed"}
      </div>
    </div>
  );
}
export default Chatbox;
