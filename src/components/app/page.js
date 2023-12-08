import CircleLanding from "@/components/about/CircleLanding";
import HiSS from "@/components/about/HiSS";
import Cards from "@/components/about/Cards";
import Events from "@/components/Events";
const Home = () => {
  return (
    <div className="w-full overflow-clip flex flex-col justify-center items-center gap-20">
      <CircleLanding />
      <HiSS />
      <Cards />
      <Events />
    </div>
  );
};
export default Home;
