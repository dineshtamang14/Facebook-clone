import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    ShoppingCartIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    shoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
    return (
      <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        {/* Left */}
        <div className="flex items-center">
          <Image
            src="https://links.papareact.com/5me"
            width={40}
            height={40}
            layout="fixed"
            alt="facebook-logo"
          />

          <div className="flex ml-2 pl-2 items-center rounded-full bg-gray-100">
            <SearchIcon className="hidden h-6 text-gray-600" />
            <input
              className="hidden p-2 md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </div>
        {/* Center */}
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* Profile photo */}
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
          <p className="whitespace-nowrap font-semibold pr-3">Dinesh Tamang</p>
        </div>
      </div>
    );
}

export default Header;
