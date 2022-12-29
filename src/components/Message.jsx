import { ListItemText } from "@mui/material";
import { Fragment } from "react";
import "../style/messages.css"

function Message({ message }) {
  const { text, photoURL } = message;

  // const messageClass = uid === "user" ? "sent" : "received";

  return (
    <Fragment>
      <img className="user-image" src={photoURL} alt="foto de perfil" />
      <ListItemText primary={text} />
    </Fragment>
  );
}

export default Message;
