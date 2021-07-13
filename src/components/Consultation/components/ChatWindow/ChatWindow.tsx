import React, {useState} from "react";
import Draggable from 'react-draggable';
import useChatContext from "../../hooks/useChatContext/useChatContext";
import {chatWindowStyle as useStyles} from "./styles";
import SendIcon from "../../assets/submitchat.svg"
import Chats from "./Chats/Chats"
export default function ChatWindow() {
    const classes = useStyles();
  const { isChatWindowOpen, setIsChatWindowOpen} = useChatContext();
    const [text, setText] = useState("");
    const patientImage =
        "https://i.pinimg.com/564x/36/60/58/366058cd421e6a981e50c6f800abbbd0.jpg";
    const doctorImage =
        "https://i.pinimg.com/736x/b4/ea/c6/b4eac6d67645f2b6e1d1a440e42cca57.jpg";

  return (
      <Draggable>
    <div className={classes.chatBox}>
        <div className={classes.chatWindowContainer}>
            <div className={classes.chatWindowContainerTop}>
                <h4 className={classes.chatWindowContainerTopName}>Name</h4>
                <button
                    onClick={() => setIsChatWindowOpen(false)}
                    className={classes.chatWindowContainerTopToggle}
                >
                    X
                </button>
            </div>
            <div>
                <div className={classes.chatWindowBottomChats}>
                    <Chats
                        me = {"p"}
                        msg={"Lorem ipsum dolor sit amet, consectetur"}
                        time={30}
                        avatar={patientImage}
                    />
                    <Chats
                        me = {'d'}
                        msg={"Lorem ipsum dolor sit amet"}
                        time={25}
                        avatar={doctorImage}
                    />
                    <Chats
                        me = {'p'}
                        msg={"Lorem ipsum dolor sit"}
                        time={20}
                        avatar={patientImage}
                    />
                    <Chats
                        me = {'p'}
                        msg={"https://www.chat.com"}
                        time={15}
                        avatar={patientImage}
                    />
                    <Chats  me = {'d'} msg={"Lorem ipsum"} time={10} avatar={doctorImage} />
                    <Chats me = {'p'} msg={"Lorem"} time={0} avatar={patientImage} />
                </div>
                <form
                    className={classes.chatWindowBottomChatbox}

                >
                    <input
                        className={classes.chatWindowBottomInput}
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write your message"
                    />
                    <button className={classes.chatWindowBottomSend}>
                        <img
                            className={classes.chatWindowBottomIcon}
                            src={SendIcon}
                            alt="send"
                        />
                    </button>
                </form>
            </div>
        </div>
    </div>
      </Draggable>
  );
}
