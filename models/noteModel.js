import { Schema, model, models } from "mongoose";

const note_schema = new Schema(
  {
    text: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Note = models.Note || model("Note", note_schema);

export default Note;
