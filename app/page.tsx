// import NewTodoForm from "@/components/NewTodoForm";

// const getData = async () => {
//   await new Promise((res) => setTimeout(() => res(), 2000));
//   return { data: [1, 2, 3, 4] };
// };

// export default async function Home() {
const Home = () => {
  // const data = await getData();
  //this console print in the terminal, that's how known its server component
  // console.log(data, "response from getData");

  return (
    <div>
      <h1>Home</h1>
      {/* <NewTodoForm /> */}
    </div>
  );
};
export default Home;
