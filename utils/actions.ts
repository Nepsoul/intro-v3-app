"use server";

import { revalidatePath } from "next/cache";
import db from "./db";

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: { content: formData.get("content") },
  });

  //it expire the cache of that page, then enforces to go refresh its data
  revalidatePath("/todos");
};
