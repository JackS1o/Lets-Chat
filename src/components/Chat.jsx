import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";

function Chat() {
  const messagesRef = collection(db, "messages");
  const queryMessage = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(queryMessage, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async () => {
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg, index) => <Message key={index} message={msg} />)}
      </main>
      <form>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="button" onClick={sendMessage}>
          Enviar
        </button>
      </form>
    </>
  );
}

export default Chat;
