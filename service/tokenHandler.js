import jwt from "jsonwebtoken";

export const createToken = async (email, user) =>
  await jwt.sign({ email: email, user: user._id }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });

export const verifyToken = async (token) =>
  await jwt.verify(token, process.env.JWT_KEY);
