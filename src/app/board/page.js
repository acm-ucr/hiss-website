import Title from "@/components/Title";
import Cards from "@/components/board/Cards";
import circle from "../../../public/assets/circle.svg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Title title={"Meet The Team"} />
      <div className="flex flex-col justify-center items-center mt-8 mb-32">
        <div className="absolute z-2 top-0 lg:scale-125 lg:-translate-y-[20%] lg:translate-x-[80%] hidden lg:block">
          <Image src={circle} alt="circle" width={900} height={400} />
        </div>

        <div className="absolute z-2 top-0 scale-125 right-[20%] -translate-y-[-30%] translate-x-[-160%] hidden lg:block">
          <Image src={circle} alt="circle" width={900} height={400} />
        </div>

        <div className="z-3">
          <Cards />
        </div>
      </div>
    </>
  );
};
export default Home;
