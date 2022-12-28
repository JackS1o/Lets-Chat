function Message({ message }) {
  const { text, photoURL } = message;
  console.log(photoURL);

  // const messageClass = uid === "user" ? "sent" : "received";

  return (
    <div>
      <img src={ photoURL } alt="foto de perfil" />
      <p>{ text }</p>
    </div>
  );
}

export default Message;
