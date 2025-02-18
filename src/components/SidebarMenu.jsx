import {
  FriendIcon2,
  GroupIcon,
  MarketIcon,
  MemoriesIcon,
  Moreicon,
  PlayIcon,
} from "../icons";
import MenuItem from "./MenuItem";
import useUserStore from "../stores/userStore";
import Avatar from "../components/Avatar";
import { Link } from "react-router";

const SidebarMenu = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[220px] max-lg:hidden">
      <Link to="/profile">
        <MenuItem
          icon={Avatar}
          text={`${user.firstName} ${user.lastName}`}
          className="w-11 rounded-full bg-slate-200"
          imgSrc={user.profileImage}
        />
      </Link>
      <Link to="friends">
        <MenuItem icon={FriendIcon2} text="Friends" className="w-11" />
      </Link>
      <MenuItem icon={MemoriesIcon} text="Memories" className="w-11" />
      <MenuItem icon={GroupIcon} text="Group" className="w-11" />
      <MenuItem icon={PlayIcon} text="Video" className="w-11" />
      <MenuItem icon={MarketIcon} text="Marketplace" className="w-11" />
      <MenuItem
        icon={Moreicon}
        text="More.."
        className="w-10 p-2 border border-gray-800 rounded-full"
      />
    </div>
  );
};
export default SidebarMenu;
