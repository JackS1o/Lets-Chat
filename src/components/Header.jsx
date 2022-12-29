import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase";
import SignOut from "./SignOut";

const auth = getAuth(app);

function Header() {
  const [user] = useAuthState(auth);
  return (
    <Fragment>
      <Box>
        <AppBar sx={{ backgroundColor:"#1e1e24"}}>
          <Toolbar>
            <Box mr={2}>
              <ChatIcon fontSize="large" />
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Let's Chat
            </Typography>
          {user && (
            <Box>
              <SignOut />
            </Box>
          )}
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}

export default Header;
