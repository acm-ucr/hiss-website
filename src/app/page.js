import Landing from "@/components/about/Landing";
import HISS from "@/components/about/HISS";
import Cards from "@/components/about/Cards";
import Events from "@/components/Events";
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <Landing />
      <HISS />
      <Cards />
      <Events />
    </div>
  );
};
export default Home;
