import { auth } from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "../style/messages.css";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

function SingIn() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}
    >
      <Button
        variant="contained"
        color="inherit"
        onClick={() => signInWithGoogle()}>
        <img
          className="user-image"
          src="https://imagepng.org/wp-content/uploads/2019/08/google-icon-2.png"
          alt="logo do google"
        />
        Sign In with Google
      </Button>
    </Box>
  );
}

export default SingIn;
