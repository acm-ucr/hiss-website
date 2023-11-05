import Title from "@/components/Title";
import Cards from "@/components/board/Cards";
const Home = () => {
  return (
    <>
      <Title title={"Meet The Team"} />
      <div className="flex flex-col justify-center items-center">
        <Cards />
      </div>
    </>
  );
};
export default Home;
