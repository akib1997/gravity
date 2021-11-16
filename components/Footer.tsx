import Link from "next/link";
import Image from "next/image";
import React from "react";
import Social from "./Social";
import FooterLogo from "../theme/images";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="px-4 py-12 bg-[#10181E]">
        <div className="max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 ">
            <div className="col-span-2">
              <Link href="/">
                <a>
                  <Image
                    src={FooterLogo}
                    alt="Logo"
                    width="300"
                    height="45"
                    layout="fixed"
                  />
                </a>
              </Link>
              <p className="text-gravityGrayLight my-3 text-sm">
                Gravity Finance is a growing suite of innovative products
                designed to automate manual and mundane tasks, taking the work
                out of DeFi, allowing you to earn yield in passive ways and
                share in the succes of the protocol through admin-fees.
              </p>
              <h6 className="font-bold text-gravityYellow mb-2">Join us!</h6>
              <Social />
            </div>
            <div className="lg:justify-self-end">
              <h6 className="font-bold text-gravityYellow uppercase mb-3">
                QUICK LINKS
              </h6>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Getting started</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Documentation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Tutorials </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">FAQ </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a className="inline-block font-bold"> Github </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold"> Audits </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <h6 className="font-bold text-gravityYellow uppercase mb-3">
                PRODUCTS
              </h6>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Exchange</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Liquidity</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Farms </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Vaults </a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a className="inline-block font-bold"> Launchpad </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold"> Governance </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <h6 className="font-bold text-gravityYellow uppercase mb-3">
                SOCIAL
              </h6>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Discord</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Medium</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Telegram </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block font-bold">Twitter</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
