import { TbSearch } from "react-icons/tb";
import { TbBaguette } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <TbSearch />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Profile icon */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Mathilde Dupont</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div className="rounded-full bg-white w-[40px] h-[40px] flex items-center justify-center">
          <TbBaguette size="30px" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
