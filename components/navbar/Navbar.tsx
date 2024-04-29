import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../icons/SearchIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import LoginButton from "../buttons/LoginButton";
import SignUpButton from "../buttons/SignUpButton";
import LocalizationButton from "../buttons/LocalizationButton";

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      <ul className="flex text-sm">
        <li id="nav-menu" className="grow-0 px-5 py-4">
          <Image
            src="images/icons/menu.svg"
            alt="menu"
            width={20}
            height={20}
            className="inline-block cursor-pointer"
          />
        </li>
        <li id="nav-logo" className="grow flex justify-center px-5 py-4">
          <Link href="/" className="flex item-center">
            <Image
              id="nav-logo-image"  
              src="images/logos/udemy.svg"
              alt="udemy logo"
              width={75}
              height={28}
            />
          </Link>
        </li>
        <li
          id="nav-categories"
          className="hidden grow-0 py-6 pr-5 whitespace-nowrap"
        >
          <Link href="/">Categories</Link>
        </li>
        <li id="nav-search-lg" className="hidden grow py-3 pr-5">
          <div className="relative">
            <div className="absolute inset-4 w-4 h-4 text-gray-500">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              placeholder="Search for anything"
              className="block w-full pl-12 border border-gray-300 rounded-full h-12 text-sm placeholder-gray-500"
            />
          </div>
        </li>
        <li
          id="nav-udemy-business"
          className="hidden grow-0 py-6 pr-5 whitespace-nowrap"
        >
          <Link href="/">Udemy Business</Link>
        </li>
        <li
          id="nav-teach-on-udemy"
          className="hidden grow-0 py-6 pr-5 whitespace-nowrap"
        >
          <Link href="/">Teach on Udemy</Link>
        </li>
        <li id="nav-search-sm" className="grow-0 pr-8 flex items-center">
          <Link href="/">
            <div className="w-4 h-4 text-black">
              <SearchIcon />
            </div>
          </Link>
        </li>
        <li id="nav-shopping-cart" className="grow-0 pr-5 flex items-center">
          <Link href="/">
            <div className="w-5 h-5 text-gray-500">
              <ShoppingCartIcon />
            </div>
          </Link>
        </li>
        <li id="nav-login" className="hidden grow-0 py-4 pr-2">
          <Link href="/">
            <LoginButton />
          </Link>
        </li>
        <li id="nav-signup" className="hidden grow-0 py-4 pr-2">
          <Link href="/">
            <SignUpButton />
          </Link>
        </li>
        <li id="nav-localization" className="hidden grow-0 py-4 pr-10">
          <Link href="/">
            <LocalizationButton />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
