import { SearchIcon } from "../icons";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

function SidebarContact() {
  return (
    <div
      className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2
		pt-4 px-2 max-xl:hidden "
    >
      <div className="flex justify-between text-gray-500">
        <span>Contact</span>
        <div className="flex gap-2">
          <SearchIcon className="w-6" />
          ...
        </div>
      </div>
      <MenuItem
        icon={Avatar}
        text="Puma Codecamp"
        imgSrc="https://www.svgrepo.com/show/303599/spider-man-4-logo.svg"
        className="w-11 h-11 rounded-full bg-slate-200"
      />
      <MenuItem
        icon={Avatar}
        text="Nhan Codecamp"
        imgSrc="https://www.svgrepo.com/show/420360/avatar-batman-comics.svg"
        className="w-11 h-11 rounded-full bg-slate-200"
      />
      <MenuItem
        icon={Avatar}
        text="Mint Codecamp"
        imgSrc="https://www.svgrepo.com/show/420329/anime-away-face.svg"
        className="w-11 h-11 rounded-full bg-slate-200"
      />
    </div>
  );
}
export default SidebarContact;
