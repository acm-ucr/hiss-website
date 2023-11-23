import Title from "@/components/Title";
import Events from "@/components/Events";
import Calendar from "@/components/calendar/Calendar";
const Home = () => {
  return (
    <>
      <Title title={"Events"} />
      <div className="flex flex-col justify-center items-center gap-20">
        <Events />
        <Calendar />
      </div>
    </>
  );
};
export default Home;
