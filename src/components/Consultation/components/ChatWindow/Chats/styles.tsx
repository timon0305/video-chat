import {makeStyles, Theme} from "@material-ui/core";

export const ChatsStyle = makeStyles((theme: Theme) => ({
        chats: {
            display: "flex",
            justifyContent: "flex-start",
            gap: '1rem',
            marginTop: "0.5rem",
            marginRight: '1rem',
        },
        chatMessage: {
            maxWidth: '70%',
            display: "flex",
            flexDirection: "column"
        },
        chatText: {
            overflowX: 'hidden',
            borderRadius: '5px',
            padding: '0.5rem',
            paddingRight: '1rem',
            fontSize: '0.8rem',
            fontWeight: 600
        },
        chatValue: {
            margin: 0,
            opacity: 0.7
        },
        chatTime: {
            fontSize: '0.7rem',
            fontWeight: 'bold',
            marginTop: 0,
            color: 'gray',
            textAlign: 'right',
        },
        chatAvatar: {
            borderRadius: '99px',
            width: '35px',
            height: '35px'
        }
    })
)