function Message(props) {
  const { message, profileImage, uid } = props;
  return (
    <div>
      <img src={ profileImage } alt="foto de perfil" />
      <p>{ message }</p>
    </div>
  );
}

export default Message;
