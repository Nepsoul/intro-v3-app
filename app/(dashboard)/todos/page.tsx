/*using (dashboard)=> group routing */
/*static routing: aleady know the name of route */

console.log(process.argv); //only accessible in node/ server

import TodoList from "@/components/TodoList";
import db from "@/utils/db";

const getData = async () => {
  //to show the loading component
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000));
  //to show the error component, by rejecting promise
  // await new Promise((resolve, reject) => setTimeout(() => reject(), 2000));

  const todos = await db.todo.findMany({});
  console.log(todos);
  return todos;
};
const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
export default TodosPage;
