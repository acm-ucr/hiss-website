import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import filters from "@/data/filters";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <div className="md:w-1/3 flex gap-3 mb-2 md:mb-0 items-center">
        <AiOutlineArrowLeft
          onClick={() => {
            onNavigate("PREV");
          }}
          className="hover:cursor-pointer text-hiss-blue text-4xl"
        />
        <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple  text-4xl">
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.getFullYear()}
        </p>

        <AiOutlineArrowRight
          onClick={() => onNavigate("NEXT")}
          className="hover:cursor-pointer text-hiss-blue text-4xl"
        />
      </div>
      <Row className="w-10/12 md:w-3/4 m-0 p-0 flex justify-center md:justify-end justify-items-center items-center">
        {filters.map((filter, index) => (
          <Col key={index} xs={9} sm={3} className="p-1 ">
            <p className="bg-hiss-yellow text-white whitespace-nowrap text-center text-sm md:text-base rounded-sm m-1 py-1 h-9">
              {filter.topic}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CustomToolbar;
