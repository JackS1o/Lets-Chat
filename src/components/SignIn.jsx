import { auth } from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function SingIn() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return <button onClick={() => signInWithGoogle()}>Sing In with Google</button>;
}

export default SingIn;
