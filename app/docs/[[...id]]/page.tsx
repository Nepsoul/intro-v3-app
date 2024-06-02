/* - [...id] =>nested routing(i.e. localhost:3001/docs/anything/any/any/any), it renders same page, 
   - it does not include docs(url has to be docs/somthing)
   - after [[...id]], it makes docs inclusive which include docs(e.g.localhost:3001/docs, shows this page)
   - style.module.css, its property can be treat like variable
   - style.module.css like js module which are encapsulated
   */
import styles from "./style.module.css";
const DocPage = ({ params }) => {
  console.log(params);
  return (
    <div className={`${styles.title} ${styles.upperCase}`}>docs{params.id}</div>
  );
  // return <div className={styles.title}>docs{params.id}</div>;
};
export default DocPage;
