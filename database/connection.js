import mongoose from "mongoose";

// const mongoDB = "mongodb://localhost:27017/todoye";
const mongoDB = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.k8jutf2.mongodb.net/todoye?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MONGO CONNECTION ERROR"));
export default db;
