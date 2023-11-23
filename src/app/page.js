import Landing from "@/components/about/Landing";
import HiSS from "@/components/about/HiSS";
import Cards from "@/components/about/Cards";
import Events from "@/components/Events";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <Landing />
      <HiSS />
      <Cards />
      <Events />
    </div>
  );
};
export default Home;
