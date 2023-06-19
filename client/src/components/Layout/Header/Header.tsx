const Header = () => {
  return (
    <div className="fixed left-0 right-0 z-30 flex justify-between items-center shadow-md h-14 bg-gray-500/30">
      <div className="container h-full flex justify-between items-center">
        <p className="font-kablammo text-white text-3xl">LinhNV</p>
        <div className="flex justify-center items-center">
          <button className="w-28 h-10 rounded-lg  text-white uppercase font-bold">
            Login
          </button>
          <button className="w-28 h-10 rounded-lg  text-white uppercase font-bold">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
