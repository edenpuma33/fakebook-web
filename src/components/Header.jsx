import { Link } from "react-router";
import {
  FacebookLogo,
  FriendIcon,
  HomeIcon,
  MarketIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
} from "../icons";
import useUserstore from "../stores/userStore";
import Avatar from "./Avatar";

function Header() {
  const user = useUserstore((state) => state.user);
  const logout = useUserstore((state) => state.logout);
  console.log(user);
  return (
    <header className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
      {/* Searchh bar */}
      <div className="flex-1 flex gap-2 items-center">
        <Link to="/">
          <FacebookLogo className="w-12" />
        </Link>
        <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <SearchIcon className="w-4 opacity-60" />
        </label>
      </div>
      {/* Center icon menu */}
      <div className="flex-1 flex gap-2 justify-center max-lg:hidden">
        <Link
          to="/"
          className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900"
        >
          <HomeIcon className="w-1/2" />
        </Link>
        <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
          <PlayIcon className="w-1/2" />
        </div>
        <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
          <MarketIcon className="w-1/2" />
        </div>
        <Link
          to="/friends"
          className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900"
        >
          <FriendIcon className="w-3/5" />
        </Link>
      </div>
      {/* Right menu + drop down */}
      <div className="flex-1 flex gap-3 justify-end">
        <div className="avatar justify-center items-center">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-6" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-8" />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 btn-circle">
            <Avatar
              className="w-11 h-11 rounded-full bg-slate-400"
              menu={true}
              imgSrc={user.profileImage}
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <div className="divider my-0"></div>
            <li onClick={logout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
