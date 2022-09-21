import React from "react";
import {
  TextField,
  Box,
  Button,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import { useState } from "react";
import axios from "axios";

import validator from "validator";
import { useRouter } from "next/router";

function Index(props) {
  const [show, showPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  function show_password(e) {
    showPassword((prevState) => !prevState);
  }

  async function SignUp(e) {
    e.preventDefault();

    if (
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      await axios({
        method: "post",
        url: "/api/signup",
        data: {
          email: email,
          password: password,
        },
      })
        .then((response) => {
          if (response.data) {
            router.push("/");
            console.log("singddddd up");
          }
        })
        .catch((error) => {});
    } else {
      console.log(`error ${email} ${password} ${confirmPassword}`);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ADDDD0",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "70px",
        }}
        variant="h3"
        gutterBottom
      >
        SignUp
      </Typography>
      <Stack
        spacing={2}
        component="form"
        sx={{
          borderRadius: "25px",
          height: "70vh",
          width: 480,
          alignSelf: "center",
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          // error={validator.isEmail(email)}
          // helperText="Incorect email"
          sx={{
            width: "80%",
          }}
          id="outlined-basic"
          label="email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            width: "80%",
          }}
          id="outlined-basic"
          label="password"
          variant="outlined"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          sx={{
            width: "80%",
          }}
          id="outlined-basic"
          label="confirm password"
          variant="outlined"
          type={show ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        ,
        <FormControlLabel
          control={<Checkbox checked={show} onChange={show_password} />}
          label="show password"
        />
        <Button
          sx={{
            width: "50%",
          }}
          variant="contained"
          onClick={SignUp}
          type="submit"
        >
          Sign Up
        </Button>
        <Button
          sx={{
            width: "40%",
            color: "#ABD9FF",
            "&:hover": {
              backgroundColor: "#E80F88",
            },
          }}
          variant="outlined"
          onClick={() => {
            router.replace("/signin");
          }}
        >
          LogIn
        </Button>
      </Stack>
    </Box>
  );
}

export default Index;
