import Title from "@/components/Title";
import Cards from "@/components/board/Cards";
import Image from "next/image";
import circle from "../../../public/assets/circle.svg";
const Home = () => {
  return (
    <div className="overflow-clip">
      <Title title={"Meet The Team"} />
      <div className="flex flex-col justify-center items-center relative mt-8 mb-32">
        <div className="flex flex-row">
          <Image
            src={circle}
            className="hidden md:block absolute z-0 lg:scale-150 -left-[20%] bottom-0"
          />
          <div className="relative z-1">
            <Cards />
          </div>
          <Image
            src={circle}
            className="hidden md:block absolute z-0 lg:scale-150 -right-[20%] top-0"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
