import { NextResponse } from "next/server";
import { serialize } from "cookie";

export default function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/home-page")) {
    NextResponse.next();
  }
}
