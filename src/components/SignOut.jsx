import { auth } from "../firebase";

function SignOut() {
  return (
    <div>
      {auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )}
    </div>
  );
}

export default SignOut;
