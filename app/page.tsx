const getData = async () => {
  await new Promise((res) => setTimeout(() => res(), 2000));
  return { data: [1, 2, 3, 4] };
};

// export default async function Home() {
const Home = async () => {
  const data = await getData();
  //this console print in the terminal, that's how known its server component
  console.log(data, "response from getData");

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default Home;
