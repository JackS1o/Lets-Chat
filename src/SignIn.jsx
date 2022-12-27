import { auth } from "./firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function SingIn() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return <button onClick={() => signInWithGoogle()}>Sing In</button>;
}

export default SingIn;
