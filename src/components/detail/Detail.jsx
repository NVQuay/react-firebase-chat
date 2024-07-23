import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();

  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;
    const userDocRef = doc(db, "users", currentUser.id);
    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help </span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/55496003_1963840597057763_3589607484152610816_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGa5ej6N1eE9KzJOuZ6sUza-8US37cl0-77xRLftyXT7nSYE7DYkyjKTGxdEB_8HCG9wxpDC7WPq69FmQZcvX4Q&_nc_ohc=zCkyhza9VTAQ7kNvgG13zN9&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYAgabNaZwqoHVPDHVBsMDNBTr3JMneZpPfmAdD03uG07Q&oe=66BD9A49"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/55496003_1963840597057763_3589607484152610816_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGa5ej6N1eE9KzJOuZ6sUza-8US37cl0-77xRLftyXT7nSYE7DYkyjKTGxdEB_8HCG9wxpDC7WPq69FmQZcvX4Q&_nc_ohc=zCkyhza9VTAQ7kNvgG13zN9&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYAgabNaZwqoHVPDHVBsMDNBTr3JMneZpPfmAdD03uG07Q&oe=66BD9A49"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/55496003_1963840597057763_3589607484152610816_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGa5ej6N1eE9KzJOuZ6sUza-8US37cl0-77xRLftyXT7nSYE7DYkyjKTGxdEB_8HCG9wxpDC7WPq69FmQZcvX4Q&_nc_ohc=zCkyhza9VTAQ7kNvgG13zN9&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYAgabNaZwqoHVPDHVBsMDNBTr3JMneZpPfmAdD03uG07Q&oe=66BD9A49"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/55496003_1963840597057763_3589607484152610816_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGa5ej6N1eE9KzJOuZ6sUza-8US37cl0-77xRLftyXT7nSYE7DYkyjKTGxdEB_8HCG9wxpDC7WPq69FmQZcvX4Q&_nc_ohc=zCkyhza9VTAQ7kNvgG13zN9&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYAgabNaZwqoHVPDHVBsMDNBTr3JMneZpPfmAdD03uG07Q&oe=66BD9A49"
                  alt=""
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
          {console.log("isCurrentUserBlocked: ", isCurrentUserBlocked)}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
