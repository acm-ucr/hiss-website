import Title from "@/components/Title";
import Cards from "@/components/board/Cards";
const Home = () => {
  return (
    <>
      <Title title={"Meet The Team"} />
      <div className="flex flex-col justify-center items-center mt-8 mb-32">
        <Cards />
      </div>
    </>
  );
};
export default Home;
