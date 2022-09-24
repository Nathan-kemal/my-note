import Header from "../components/Header";
import CustomTextField from "../components/TextField";
import { Box } from "@mui/material";
import NoteCard from "../components/Note";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  createRequest,
  deleteRequest,
  updateRequest,
} from "../service/request";
import CustomModal from "../components/modal";
import { useRouter } from "next/router";
import { verifyToken } from "../service/tokenHandler";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Circles } from "react-loader-spinner";

function Home({ doc }) {
  const [note, setNote] = useState("");
  const [editableNote, setEditableNote] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [noteId, setNoteId] = useState("");
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery(
    ["todos"],
    async () =>
      await axios({
        method: "get",
        url: "/api/note/crud",
        headers: {
          user: doc.user,
        },
      }).then((response) => response.data)
  );

  function getInput(e) {
    e.preventDefault();
    setNote(e.target.value);
  }

  const addMutation = useMutation(createRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const deleteMutation = useMutation(deleteRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  async function add_note(e) {
    e.preventDefault();
    if (note === "") {
    } else {
      const data = { text: note, user: doc.user };
      addMutation.mutate(data);
      setNote("");
      toast("Note Added", {
        type: "success",
      });
    }
  }

  async function delete_note(id) {
    deleteMutation.mutate(id);
    toast("Note Deleted", {
      type: "warning",
    });
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
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={isLoading}
        />
        {data?.map((note) => {
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
        })}
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

export default Home;

export const getServerSideProps = async ({ req }) => {
  const { jwt } = req.cookies;

  if (!jwt) {
    return {
      redirect: {
        source: "/",
        destination: "/signin",
        permanent: true,
      },
    };
  } else {
    const data = await verifyToken(jwt);
    if (data) {
      return {
        props: {
          doc: data,
        },
      };
    }
    return {
      props: {
        doc: "null",
      },
    };
  }
};
