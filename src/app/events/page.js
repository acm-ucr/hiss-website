import Title from "@/components/Title";
import Events from "@/components/Events";
import Calendar from "@/components/calendar/Calendar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="overflow-clip">
      <Title title={"Events"} />
      <div className="flex flex-col justify-center items-center gap-20 relative">
        <div className="flex flex-row">
          <Image
            src={circle}
            className="hidden md:block absolute z-0 lg:scale-150 -left-[20%] bottom-0"
          />
          <div className="relative z-1">
            <Events />
          </div>
          <Image
            src={circle}
            className="hidden md:block absolute z-0 lg:scale-150 -right-[10%] top-0"
          />
        </div>

        <Calendar />
      </div>
    </div>
  );
};
export default Home;
