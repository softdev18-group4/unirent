import Chatbox from "./components/chatbox";
import MessageEnter from "./components/messageEnter";

function MessagePage() {
  return (
    <div>
      <div className="p-4">
        <Chatbox
          message="chat123"
          isleft={true}
          time="0:00"
          isRead={-1}
        ></Chatbox>{" "}
        <Chatbox
          message="chat123"
          isleft={false}
          time="0:01"
          isRead={0}
        ></Chatbox>{" "}
      </div>

      <MessageEnter></MessageEnter>
    </div>
  );
}
export default MessagePage;
