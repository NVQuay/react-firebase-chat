import "./list.css";
import Userinfo from "./userInfor/Userinfo";
import ChatList from "./chatList/ChatList";

const List = () => {
  return (
    <div className="list">
      <Userinfo />
      <ChatList />
    </div>
  );
};

export default List;
