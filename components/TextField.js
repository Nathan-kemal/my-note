import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";

export default function CustomTextField(props) {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        multiline={true}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add Notes"
        inputProps={{ "aria-label": "Take Notes" }}
        onChange={props.getInput}
        value={props.note}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        onClick={props.addNote}
        color="primary"
        sx={{ p: "10px" }}
        aria-label="directions"
      >
        <CreateIcon />
      </IconButton>
    </Paper>
  );
}
