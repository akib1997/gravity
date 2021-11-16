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
    <header className="w-full">
      <nav className="py-3 sm:py-5">
        <div className="container">
          <div className="relative lg:flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="block">
                <Image
                  src={Images.Logo}
                  width="137"
                  height="40"
                  layout="fixed"
                />
              </a>
              <div className="ml-auto flex items-center lg:hidden">
                <button
                  type="button"
                  className="focus:outline-none inline-flex items-center justify-center rounded-md text-colorTwo w-8 h-8"
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

            <div
              className={`${
                menu
                  ? "left-0 bg-gravityDark opacity-100 translate-x-0"
                  : "-left-full bg-opacity-100 -translate-x-4 lg:-translate-x-0 opacity-0"
              } ml-auto transition-all lg:static absolute top-12 z-50 lg:w-auto w-full lg:bg-transparent p-4 lg:p-0 lg:opacity-100 transform`}
            >
              <ul className="lg:flex lg:space-x-10 items-center lg:text-left text-center lg:pt-0 pt-8">
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-2 xl:px-3 py-1 xl:py-2 md:ml-2 xl:ml-4 text-white transition-all block">
                      Audit Report
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a className="border-2 border-gravityYellow px-4 py-2 text-white rounded-lg flex items-center justify-center space-x-2">
                      <Image
                        src="/images/gravity.png"
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
