import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import CustomModal from "./modal";

export default function NoteCard({ text, id, date, editNote, deleteNote }) {
  return (
    <Card sx={{ width: 300, marginTop: "10px", marginLeft: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={editNote}>
          Edit
        </Button>
        <Button size="small" onClick={deleteNote}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
