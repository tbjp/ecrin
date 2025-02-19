import { TbSearch } from "react-icons/tb";
import { TbNotification } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <TbSearch className="text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Profile icon */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <TbNotification size="20px" />
          <div className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-white">
            Sora Ishida
          </span>
          <span className="text-[10px] text-gray-400 text-right">Admin</span>
        </div>
        <div className="rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center">
          {/* <TbBaguette size="30px" /> */}
          <span className="text-xl font-medium">SI</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
