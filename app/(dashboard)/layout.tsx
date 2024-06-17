/*nested layout, it should be placed into the root of e.g. dashboard folder so underneath the pages wrapped init
children prop should be passed and return it, to wrap and render the beneath of its pages e.g. todos page
*/
import NewTodoForm from "@/components/NewTodoForm";
const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
