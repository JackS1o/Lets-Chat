import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Chat";
import { app } from "./firebase";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

const auth = getAuth(app);

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
