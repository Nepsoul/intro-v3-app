//server actions

"use client";
import { completeTodo } from "@/utils/actions";
import { useTransition } from "react"; //hook is used for control timing of state change based on user interactions

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      //css does not worked
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? "line-through text-black-30" : ""
      }`}
      onClick={() => {
        () => startTransition(() => completeTodo(todo.id));
      }}
    >
      {todo.content}
    </div>
  );
};
export default Todo;
