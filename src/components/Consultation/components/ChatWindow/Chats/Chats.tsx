import React, {} from "react";
import {ChatsStyle as useStyles} from "./styles";

// @ts-ignore
export default function Chats({me, msg, time, avatar}) {
    const classes = useStyles();
    return (
        <div className={classes.chats} style={{justifyContent: me==='p'? "flex-end":'flex-start'}}>
            <div className={classes.chatMessage}>
                <div className={classes.chatText} style={{backgroundColor: me==="p" ? '#4c8080': '#ffffff'}}>
                    <p className={classes.chatValue} style={{color: me==="p" ? '#ffffff': 'black'}}>
                        {msg}
                    </p>
                </div>
                <p className={classes.chatTime}>
                    {time < 5 ? 'Just now': `${time} secs ago`}
                </p>
            </div>
            <img className={classes.chatAvatar} src={avatar} alt="user"/>
        </div>
    )
}