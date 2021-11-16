import React from "react";
import Image from "next/image";
import { Images } from "../theme/images";

const Partners: React.FC = () => {
  return (
    <>
      <div className="py-20 md:mb-20">
        <h3 className="text-2xl sm:text-4xl font-bold mb-6 capitalize">
          Out partners
        </h3>
        <ul className="grid sm:grid-cols-3 gap-6">
          <li className="mx-">
            <div className="w-32 h-32 rounded-full border-3 border-gravityYellow flex items-center justify-center my-4 mx-auto">
              <Image
                src={Images.Adamant}
                width="92"
                height="92"
                layout="fixed"
              />
            </div>
            <p className="text-lg font-medium text-gravityGrayLight">
              Adamant Fianace
            </p>
          </li>
          <li className="mx-">
            <div className="w-32 h-32 rounded-full border-3 border-gravityYellow flex items-center justify-center my-4 mx-auto">
              <Image src={Images.Crazy} width="92" height="92" layout="fixed" />
            </div>
            <p className="text-lg font-medium text-gravityGrayLight">
              Crazy Crows Chess Club
            </p>
          </li>
          <li className="mx-">
            <div className="w-32 h-32 rounded-full border-3 border-gravityYellow flex items-center justify-center my-4 mx-auto">
              <Image src={Images.Matic} width="92" height="92" layout="fixed" />
            </div>
            <p className="text-lg font-medium text-gravityGrayLight">
              Powered by <span className="font-bold text-white"> Polygon</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Partners;
