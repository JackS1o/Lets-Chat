import { AppBar, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Fragment } from "react"
import ChatIcon from "@mui/icons-material/Chat";

function Header () {
  return (
    <Fragment>
      <Box>
        <AppBar>
          <Toolbar>
            <Box mr={2}>
              <ChatIcon fontSize="large"/>
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Let's Chat
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  )
}

export default Header
