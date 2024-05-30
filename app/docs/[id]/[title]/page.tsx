/*Dyanmic routing, [id] makes dynamic route*/
//implementing the params make the route name dynamic
const DocsIdPage = ({ params }) => {
  //giving multiple parameter
  return (
    <div>
      id {params.id}
      {params.title}
    </div>
  );
};

export default DocsIdPage;
