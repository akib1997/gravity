import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Images } from "../theme/images";

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="w-full relative">
      <nav className="py-10 px-4">
        <div className="lg:container">
          <div className="relative lg:flex items-center justify-between">
            <div className="flex items-center">
              <ul
                className={`:flex-row space-x-8 w-full lg:w-auto z-50 transition-all md:flex hidden items-center`}
              >
                <li className="">
                  <Link href="/">
                    <a className="text-white transition-all block font-bold">
                      Read docs
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Link href="/">
                    <a className="text-white transition-all block font-bold">
                      Audit Report
                    </a>
                  </Link>
                </li>
                <li className="absolute right-0">
                  <Link href="/">
                    <a className="border-2 border-gravityYellow px-4 py-2 font-bold text-white rounded-lg flex items-center justify-center space-x-2">
                      <Image
                        src="/images/gravity.png"
                        alt="gravity"
                        width="18"
                        height="17"
                        layout="fixed"
                        priority
                      />
                      <span>Launch App</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <Link href="/">
                <a className="block absolute left-0 right-0 mx-auto max-w-xs lg:max-w-sm w-60 sm:w-full -top-3">
                  <Image
                    src="/images/gravity-title.png"
                    alt="Logo"
                    width="400"
                    height="70"
                    layout="responsive"
                  />
                </a>
              </Link>

              <button
                type="button"
                className="focus:outline-none rr:inline-flex items-center justify-center rounded-md w-8 h-8 hidden absolute right-3 top-3"
                onClick={handleMenu}
              >
                {menu ? (
                  <span className="text-white block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="w-5 h-5 text-white block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <span className="absolute block bottom-0 w-full h-px left-0 bg-gradient-to-r from-transparent via-gravityYellow to-transparent"></span>
    </header>
  );
};

export default Header;
