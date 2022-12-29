import { auth } from "../firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Typography } from "@mui/material";

function SignOut() {
  return (
    <>
      {auth.currentUser && (
        <IconButton
          aria-label="logout"
          color="inherit"
          onClick={() => auth.signOut()}
        >
          <LogoutIcon fontSize="large" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LogOut
          </Typography>
        </IconButton>
      )}
    </>
  );
}

export default SignOut;
