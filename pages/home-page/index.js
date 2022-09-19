import Header from "../../components/Header";
import CustomTextField from "../../components/TextField";
import { Box, Grid, Stack } from "@mui/material";
import NoteCard from "../../components/Note";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  createRequest,
  deleteRequest,
  updateRequest,
} from "../../service/request";
import CustomModal from "../../components/modal";
import { useRouter } from "next/router";

function Index(props) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [notes, setGetNotes] = useState([]);
  const [editableNote, setEditableNote] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [noteId, setNoteId] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "/api/note/crud",
      data: {
        text: note,
      },
    })
      .then((response) => {
        setGetNotes(response.data);
      })
      .catch((error) => {});
  }, [notes]);

  function getInput(e) {
    e.preventDefault();
    setNote(e.target.value);
  }
  async function add_note(e) {
    e.preventDefault();
    if (note === "") {
    } else {
      await createRequest("/api/note/crud", note);
      setNote("");
    }
  }
  async function delete_note(id) {
    await deleteRequest("/api/note/crud", id);
  }

  async function update_note(id, text) {
    setEditableNote(text);
    setOpenModal((prevState) => !prevState);
    setNoteId(id);
  }

  return (
    <Box
      sx={{
        backgroundColor: "#D2DAFF",
        height: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomTextField note={note} addNote={add_note} getInput={getInput} />
      </Box>
      <Box
        marginTop="10px"
        flexWrap="wrap"
        justifyContent="center"
        flexDirection="row"
        display="flex"
      >
        {notes.length <= 0 ? (
          <h1>Take a Note</h1>
        ) : (
          notes.map((note) => {
            let editable = false;

            return (
              <NoteCard
                key={note._id}
                text={note.text}
                id={note._id}
                date={note.createdAt}
                deleteNote={(e) => delete_note(note._id)}
                editNote={(e) => update_note(note._id, note.text)}
              />
            );
          })
        )}
      </Box>
      {openModal && (
        <CustomModal
          id={noteId}
          text={editableNote}
          state={openModal}
          handleCloseModal={() => {
            setOpenModal(false);
            setEditableNote("");
          }}
          handleUpdateCloseModal={() => {
            setOpenModal(false);
          }}
        />
      )}
      ;
      <ToastContainer />
    </Box>
  );
}

export default Index;
