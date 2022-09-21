import { authProtect } from "../../middleware/authProtect";
import db from "../../database/connection";
import User from "../../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie, getCookie } from "cookies-next";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        email: email,
        password: hashedPassword,
      });
      const token = await jwt.sign(
        { email: email, user: user._id },
        process.env.JWT_KEY,
        {
          expiresIn: "30d",
        }
      );

      setCookie("jwt", token, { req, res, maxAge: 60 * 60 * 24 });

      if (user) {
        return res.status(200).json({ token: token, user: email });
      }
      return res.status(200).json(req.body);
    } catch (e) {
      return res.status(200).json(e);
    }
  }
}
export default handler;
