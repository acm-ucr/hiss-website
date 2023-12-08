import Title from "@/components/Title";
import Events from "@/components/Events";
import Calendar from "@/components/calendar/Calendar";
import circle from "../../../public/assets/circle.svg";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="z-3">
        <Title title={"Events"} />
      </div>

      <div className="flex flex-col justify-center items-center gap-20">
        <div className="absolute z-2 top-0 scale-125 right-[20%] lg:-translate-y-[-15%] -translate-y-[-80%] translate-x-[80%]">
          <Image src={circle} alt="circle" width={900} height={400} />
        </div>
        <div className="absolute z-2 top-0 scale-125 right-[20%] -translate-y-[-30%] translate-x-[-160%]">
          <Image src={circle} alt="circle" width={900} height={400} />
        </div>

        <div className="z-3">
          <Events />
        </div>

        <div className="z-3">
          <Calendar />
        </div>
      </div>
    </>
  );
};
export default Home;
