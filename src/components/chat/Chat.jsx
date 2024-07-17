import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      {/* Top */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor, sit amet. </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      {/* CenTer */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore. Doloribus voluptas repellendus voluptate delectus
              corrupti quasi magni ducimus dolores, voluptatibus quos architecto
              eum ullam minima beatae optio id dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/321944770_719091816456125_5966487919043686580_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHo-YJ8yieqwj0VWFZbbq5HSyGHJVg62FNLIYclWDrYUzkHXhzlW4Ae2M3ROoQ_kKpVucuyzkILgKgkFKySYUGt&_nc_ohc=soTMHRTKY0gQ7kNvgEff_Nm&_nc_ht=scontent.fsgn5-15.fna&oh=00_AYAb0IGL7lNueT4hErmrVo554V8jve23uPbGW_xHWo-kGw&oe=669C0032"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore. Doloribus voluptas repellendus voluptate delectus
              corrupti quasi magni ducimus dolores, voluptatibus quos architecto
              eum ullam minima beatae optio id dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore. Doloribus voluptas repellendus voluptate delectus
              corrupti quasi magni ducimus dolores, voluptatibus quos architecto
              eum ullam minima beatae optio id dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore. Doloribus voluptas repellendus voluptate delectus
              corrupti quasi magni ducimus dolores, voluptatibus quos architecto
              eum ullam minima beatae optio id dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore. Doloribus voluptas repellendus voluptate delectus
              corrupti quasi magni ducimus dolores, voluptatibus quos architecto
              eum ullam minima beatae optio id dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              tempore. Doloribus voluptas repellendus voluptate delectus
              corrupti quasi magni ducimus dolores, voluptatibus quos architecto
              eum ullam minima beatae optio id dolore.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* Bottom */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
