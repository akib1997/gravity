import React from "react";
import Image from "next/image";
import { Images } from "../theme/images";

const Audits: React.FC = () => {
  return (
    <>
      <div className="py-20">
        <h3 className="text-2xl sm:text-4xl font-bold mb-6 capitalize">
          Audits & Reviews
        </h3>
        <ul className="grid sm:grid-cols-3 gap-6">
          <li className="mx-">
            <div className="my-4 mx-auto">
              <Image
                src={Images.Badge}
                alt="Audit"
                width="128"
                height="128"
                layout="fixed"
                priority
              />
            </div>
            <p className="text-lg font-medium text-gravityGrayLight">
              DeFi Safety Review
            </p>
          </li>
          <li className="mx-">
            <div className="w-32 h-32 rounded-full border-3 border-gravityYellow flex items-center justify-center my-4 mx-auto">
              <Image
                src={Images.OeliskAudit}
                alt="Audit"
                width="107"
                height="108"
                layout="fixed"
              />
            </div>
            <p className="text-lg font-medium text-gravityGrayLight">
              Obelisk Audit
            </p>
          </li>
          <li className="mx-">
            <div className="w-32 h-32 rounded-full border-3 border-gravityYellow flex items-center justify-center my-4 mx-auto">
              <Image
                src={Images.CTDSec}
                alt="Audit"
                width="120"
                height="120"
                layout="fixed"
              />
            </div>
            <p className="text-lg font-medium text-gravityGrayLight">
              CTDSec Audit
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Audits;
