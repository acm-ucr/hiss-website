import Button from "@/components/about/Button";

const NotFound = () => {
  return (
    <div className="justify-center flex flex-1 flex-col items-center">
      <p className="text-hiss-purple text-center text-4xl"> Whoops! </p>

      <p className="text-transparent bg-clip-text bg-gradient-to-r from-hiss-blue to-hiss-purple text-center text-8xl ">
        {" "}
        404{" "}
      </p>

      <p className=" text-hiss-blue text-center text-3xl mb-2">
        {" "}
        Page Not Found{" "}
      </p>

      <Button text={"Back To Home Page"} link={"/"} />
    </div>
  );
};

export default NotFound;
