import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import { app } from "./firebase";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import Header from "./components/Header";

const auth = getAuth(app);

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Header />
      {user ? <Chat /> : <SignIn />}
      <SignOut />
    </>
  );
}

export default App;
