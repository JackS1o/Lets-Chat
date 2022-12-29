import { ListItemText } from "@mui/material";
import { Fragment } from "react";
import "../style/messages.css";

function Message({ message }) {
  const { text, photoURL } = message;

  // const messageClass = uid === "user" ? "sent" : "received";

  return (
    <Fragment width="100px">
      <img className="user-image" src={photoURL} alt="foto de perfil" />
      <ListItemText
        primary={text}
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          width: "100px",
          height: "30px",
          backgroundColor: "rgb(0, 162, 255)",
          color: "white",
          padding: "5px",
          borderRadius: "10px",
        }}
      />
    </Fragment>
  );
}

export default Message;
