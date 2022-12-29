import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import "../style/messages.css";

function Message({ message }) {
  const { text, photoURL } = message;

  // const messageClass = uid === "user" ? "sent" : "received";

  return (
    <Fragment>
      <img className="user-image" src={photoURL} alt="foto de perfil" />
      <Typography
        variant="p"
        sx={{
          display: "flex",
          height: "auto",
          width: "auto",
          backgroundColor: "rgb(0, 162, 255)",
          color: "white",
          padding: "5px",
          borderRadius: "10px",
          fontSize: "18px",
        }}
      >
        {text}
      </Typography>
    </Fragment>
  );
}

export default Message;
