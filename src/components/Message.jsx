import { Fragment } from "react";
import { auth } from "../firebase";
import "../style/messages.css";

function Message({ message }) {
  const { text, photoURL, uid } = message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <Fragment>
      <div className={`message ${messageClass}`}>
        <img className="user-image" src={photoURL} alt="foto de perfil" />
        <p
        >
          {text}
        </p>
      </div>
    </Fragment>
  );
}

export default Message;
