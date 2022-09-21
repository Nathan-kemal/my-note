import db from "../../../database/connection";
import Note from "../../../models/noteModel";
import {
  createNote,
  getNote,
  deleteNote,
  updateNote,
} from "../../../service/datebase";
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const note = await getNote(req.headers.user);
      return res.status(200).json(note);
    } else if (req.method === "POST") {
      const note = await createNote(req.body);
      return res.status(201).json(note);
    } else if (req.method === "DELETE") {
      const note = await deleteNote(req.body.id);
      return res.status(201).json(note);
    } else if (req.method === "PUT") {
      const note = await updateNote(req.body.id, req.body.text);
      return res.status(201).json(note);
    }
  } catch (error) {
    return res.status(403).json({ error });
  }
}
