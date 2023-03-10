import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { Fragment, useRef, useState } from "react";
import { auth, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import {
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../style/chat.css";

function Chat() {
  const messagesRef = collection(db, "messages");
  const queryMessage = query(messagesRef, orderBy("createdAt"), limit(1000));
  const [messages] = useCollectionData(queryMessage, { idField: "id" });
  const scrollMessage = useRef();

  const [formValue, setFormValue] = useState("");

  const sendMessage = async () => {
    const { uid, photoURL } = auth.currentUser;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    scrollMessage.current.scrollIntoView({ behavior: "smooth" });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1e1e24",
      },
    },
  });

  return (
    <Fragment>
      <Container sx={{ marginTop: 12 }}>
        <Paper elevation={5}>
          <Box p={3}>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid className="chat" item fullWidth>
                <List className="messages-list">
                  {messages &&
                    messages.map((msg, index) => (
                      <ListItem key={index}>
                        <Message message={msg} />
                      </ListItem>
                    ))}
                  <div ref={scrollMessage}></div>
                </List>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Grid item xs={10} mr={2} ml={2}>
                  <FormControl fullWidth>
                    <ThemeProvider theme={theme}>
                      <TextField
                        variant="outlined"
                        color="primary"
                        label="Digite sua mensagem"
                        type="text"
                        value={formValue}
                        autoComplete="off"
                        onChange={(e) => setFormValue(e.target.value)}
                        inputProps={{ style: { border: "red" } }}
                      />
                    </ThemeProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    aria-label="send"
                    onClick={sendMessage}
                    color="primary"
                  >
                    <SendIcon sx={{ color: "#1e1e24" }} />
                  </IconButton>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default Chat;
