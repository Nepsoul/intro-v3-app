/*Dyanmic routing, [id] makes dynamic route*/
//implementing the params make the route name dynamic
const DocsIdPage = ({ params }) => {
  return <div>id {params.id}</div>;
};

export default DocsIdPage;
