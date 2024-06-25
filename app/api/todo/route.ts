import { NextResponse } from "next/server"; //wrapper around response to minimize typescript issue

//response shows in localhost:3000/api/todo
export const GET = async (request: Request) => {
  return NextResponse.json({ message: "hello" });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  return NextResponse.json({ message: data });
};
