import { Schema, model, models } from "mongoose";

const user_schema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const User = models.User || model("User", user_schema);
export default User;
