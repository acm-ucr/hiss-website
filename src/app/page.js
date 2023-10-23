import Card from "@/components/about/Card";
import { FaDiscord } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center h-screen">
      <Card
        text={"Discord"}
        link={"www.google.com"}
        icon={<FaDiscord className="text-7xl text-hiss-purple" />}
      />
    </div>
  );
};

export default Home;
