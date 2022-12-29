import {
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { Fragment, useState } from "react";
import { auth, db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import "../style/chat.css";

function Chat() {
  const messagesRef = collection(db, "messages");
  const queryMessage = query(messagesRef, orderBy("createdAt"), limit(1000));
  const [messages] = useCollectionData(queryMessage, { idField: "id" });

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
  };

  return (
    <Fragment>
      <Container sx={{ marginTop: 12 }}>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              oi
            </Typography>
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
                </List>
              </Grid>
              <Grid item xs={10} mr={2}>
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    label="Digite sua mensagem"
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  aria-label="send"
                  onClick={sendMessage}
                  color="primary"
                >
                  <SendIcon />
                </IconButton>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}

export default Chat;
