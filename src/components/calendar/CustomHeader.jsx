const Header = ({ label }) => {
  return (
    <div className="pt-2 h-12 font-medium md:text-2xl bg-gradient-to-r from-hiss-blue to-hiss-purple  text-white ">
      {label}
    </div>
  );
};

export default Header;
