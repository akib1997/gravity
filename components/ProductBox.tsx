import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductBoxProps {
  id: number;
  title: string;
  details: string;
  linkText: string;
  url: string;
  icon: string;
}

const ProductBox: React.FC<ProductBoxProps> = ({
  title,
  details,
  icon,
  linkText,
  url,
  id,
}: ProductBoxProps) => {
  const widthSetup = (id: number) => {
    if (id === 6) {
      return "50";
    } else if (id === 4) {
      return "57";
    } else {
      return "63";
    }
  };
  return (
    <>
      <div className="rounded-2xl bg-[#10181E] border-3 border-[#1C2327] relative p-6 pt-20">
        <div className="border-3 bg-[#10181E] border-gravityYellow w-28 h-28 rounded-full flex items-center justify-center absolute left-0 right-0 mx-auto -top-14">
          <Image
            src={icon}
            alt={title}
            width={widthSetup(id)}
            height="50"
            layout="fixed"
          />
        </div>
        <h6 className="font-bold mb-2.5"> {title} </h6>
        <p className="pb-4 text-gravityGrayLight"> {details} </p>
        <Link href={url}>
          <a className="block bg-gravityYellow text-black px-4 py-2 font-bold rounded-lg">
            {linkText}
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProductBox;
