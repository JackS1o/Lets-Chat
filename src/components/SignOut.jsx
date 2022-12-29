import { auth } from "../firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";

function SignOut() {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ display: "flex" }}>
        {auth.currentUser && (
          <IconButton
            aria-label="logout"
            color="inherit"
            onClick={() => auth.signOut()}
          >
            <LogoutIcon />
            LogOut
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

export default SignOut;
