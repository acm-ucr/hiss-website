const Header = (props) => {
  return (
    <div className="p-2 h-12 text-2xl bg-gradient-to-r from-hiss-blue to-hiss-purple  text-white">
      {props.label}
    </div>
  );
};

export default Header;
