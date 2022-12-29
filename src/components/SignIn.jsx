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
        color="inherit"
        onClick={() => signInWithGoogle()}>
        <img
          className="user-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoa_4-bNUjFin3_Nx8nBGn8kXrc1UEFBs-Z85XlEeeu6zPLcQ&s"
          alt="logo do google"
        />
        Sing In with Google
      </Button>
    </Box>
  );
}

export default SingIn;
