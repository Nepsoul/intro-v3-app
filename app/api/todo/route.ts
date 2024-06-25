import { NextResponse } from "next/server"; //wrapper around response to minimize typescript issue
import db from "@/utils/db";

//response shows in localhost:3000/api/todo
export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ data: todos });
};

export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({ data });
  return NextResponse.json({ message: todo });
};
