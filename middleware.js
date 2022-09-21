import { NextResponse } from "next/server";
import { validate_token, nigger } from "./service/validateToken";
import jsonToken from "jsonwebtoken";

export async function middleware(request) {
  // const cookie_token = request.cookies.get("jwt");
  // await jsonToken.verify(cookie_token, process.env.JWT_KEY);
  // console.log(cookie);
  // return NextResponse.redirect(new URL("/notes", request.url));
}

export const config = {
  // matcher: "/signin",
};
