const Header = () => {
  return (
    <div className="border-b-2 border-gray-300">
      <div className="max-w-[217.5px] flex items-center justify-center space-x-2 px-3 py-3 gap-2 border-x-2 border-gray-300 ">
        <img
          className="cursor-pointer"
          src="/logo.svg"
          height={24}
          width={24}
          alt="logo"
        />
        <p className="text-black font-bold">Aexvion</p>
        <img className="cursor-pointer" src="/side-bar.svg" alt="side-bar" />
      </div>
    </div>
  );
};

export default Header;
