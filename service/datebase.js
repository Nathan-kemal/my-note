import Note from "../models/noteModel";

async function getNote() {
  try {
    const notes = await Note.find();
    return notes;
  } catch (e) {}
}

async function createNote(text) {
  try {
    const notes = await Note.create(text);
    return notes;
  } catch (e) {}
}

async function updateNote(id, text) {
  try {
    const notes = await Note.updateOne({ _id: id }, { text: text });
  } catch (e) {}
}

async function deleteNote(id) {
  try {
    const notes = await Note.deleteOne({ _id: id });
    return notes;
  } catch (e) {}
}

module.exports = {
  getNote,
  createNote,
  updateNote,
  deleteNote,
};
