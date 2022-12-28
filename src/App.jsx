import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Chat";
import { auth } from "./firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    {user ? (<Chat />) : (<SignIn />)}
      <SignOut />
    </>
  );
}

export default App;
