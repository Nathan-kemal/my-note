import { Schema, model, models } from "mongoose";

const note_schema = new Schema(
  {
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Note = models.Note || model("Note", note_schema);

export default Note;
