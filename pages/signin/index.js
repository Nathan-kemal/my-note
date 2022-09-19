import React from "react";
import { TextField, Box, Button, Stack, Typography } from "@mui/material";

function Index(props) {
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
          top: "80px",
        }}
        variant="h2"
        gutterBottom
      >
        LOGIN
      </Typography>
      <Stack
        spacing={2}
        component="form"
        sx={{
          borderRadius: "25px",
          height: "50vh",
          width: 480,
          alignSelf: "center",
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            width: "80%",
          }}
          id="outlined-basic"
          label="email"
          variant="outlined"
          type="email"
        />
        <TextField
          sx={{
            width: "80%",
          }}
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="password"
        />

        <Button
          sx={{
            width: "50%",
          }}
          variant="contained"
        >
          LogIn
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
        >
          SignUp
        </Button>
      </Stack>
    </Box>
  );
}

export default Index;
