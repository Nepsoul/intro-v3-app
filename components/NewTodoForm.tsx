/*By default all are server components,
for working as clinet componets use: "use client" at the top.
*/

// "use client";

const NewTodoForm = ({}) => {
  /* - even though its client component, it shows error in server. 
     - because by default next js run everything on server. 
     - code are not executed in server, it's just render in the server
    */
  // console.log(window.localStorage); //this will show error in server because its browser's method
  return (
    <div>
      <form>
        <input type="text" className="border border-black/25" />
      </form>
    </div>
  );
};

export default NewTodoForm;
