/* - [...id] =>nested routing(i.e. localhost:3001/docs/anything/any/any/any), it renders same page, 
   - it does not include docs(url has to be docs/somthing)
   - after [[...id]], it makes docs inclusive which include docs(e.g.localhost:3001/docs, shows this page)
*/

const DocPage = () => {
  return <div>docs</div>;
};
export default DocPage;
