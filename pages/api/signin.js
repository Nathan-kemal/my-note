import { authProtect } from "../../middleware/authProtect";
import db from "../../database/connection";
import User from "../../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "cookies-next";
import { createToken } from "../../service/tokenHandler";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await User.findOne({ email });

      if (user) {
        const compare = await bcrypt.compare(password, user.password);

        if (compare) {
          const token = await createToken(email, user);
          setCookie("jwt", token, { req, res, maxAge: 60 * 60 * 24 });

          return res.status(200).json({ message: "Loged In" });
        }
      }

      return res.status(200).json(req.body);
    } catch (e) {
      return res.status(200).json(e);
    }
  }
}
export default handler;
