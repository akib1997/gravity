import React from "react";
import { Images } from "../theme/images";
import ProductBox from "./ProductBox";
import Image from "next/image";
import Link from "next/link";
import Video from "./Video";

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Swap Exchange",
      icon: Images.Exchange,
      details: "Super fast trades at the best rates on our AMM",
      linkText: "Enter Exchange",
      url: "https://leanstartup.com/",
    },
    {
      id: 2,
      title: "Liquidity Pool",
      icon: Images.Pool,
      details: "Provide Liquidity for any Polygon pairs",
      linkText: "Enter the Pool",
      url: "https://leanstartup.com/",
    },
    {
      id: 3,
      title: "Yield Farm",
      icon: Images.YieldFarm,
      details: "Earn yield through our yield farms",
      linkText: "Browse Yield Farm",
      url: "https://leanstartup.com/",
    },
    {
      id: 4,
      title: "Vaults",
      icon: Images.Vaults,
      details:
        "Auto-compounding vaults take all the work out of being a yield farmer",
      linkText: "Enter the Vaults",
      url: "https://leanstartup.com/",
    },
    {
      id: 5,
      title: "Launchpad",
      icon: Images.Launchpad,
      details:
        "State of the art Launchpad for launching high-quality projects into Polygon space",
      linkText: "Go to Launchpad",
      url: "https://leanstartup.com/",
    },
    {
      id: 6,
      title: "Governance",
      icon: Images.Governance,
      details: "Circulating Supply, Tier Management, wBTC backing, Claim wETH",
      linkText: "View Governance",
      url: "https://leanstartup.com/",
    },
  ];
  return (
    <>
      <div className="py-10">
        <h3 className="text-2xl sm:text-4xl font-bold mb-6 max-w-lg mx-auto w-full">
          A growing suite of innovative DeFi products
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24 mt-32">
          {products.map((product) => (
            <ProductBox key={product.id} {...product} />
          ))}
        </div>
        <div className="grid sm:grid-cols-4 xl:grid-cols-5 items-center p-2 sm:p-6 gap-8 rounded-2xl bg-[#10181E] border-3 border-[#1C2327] mt-20">
          <div className="relative sm:col-span-2 xl:col-span-3">
            <div className="border-3 bg-[#10181E] border-gravityYellow w-28 h-28 rounded-full flex items-center justify-center absolute left-0 right-0 mx-auto -top-20">
              <Image
                src={Images.Farm}
                alt="Silos"
                width="63"
                height="50"
                layout="fixed"
              />
            </div>
            <div className="pt-16">
              <h6 className="font-bold mb-3">Silos</h6>
              <p className="pb-5 text-sm text-gravityGrayLight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                eaque voluptate praesentium molestias eligendi libero unde
                voluptas placeat vel debitis
              </p>
              <Link href="/">
                <a className="inline-block bg-gravityYellow text-black px-10 py-2 font-bold rounded-lg">
                  Go to Silos
                </a>
              </Link>
            </div>
          </div>
          <div className="video relative sm:col-span-2 rounded-2xl overflow-hidden">
            <Video />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
