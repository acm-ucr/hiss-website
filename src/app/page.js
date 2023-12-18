import CircleLanding from "@/components/about/CircleLanding";
import Cards from "@/components/about/Cards";
import Events from "@/components/Events";
import CircleHiss from "@/components/about/CircleHiSS";
const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-10">
      <CircleLanding />
      <CircleHiss />
      <Cards />
      <Events />
    </div>
  );
};
export default Home;
