import React from "react";
import Link from "next/link";
import Image from "next/image";
const Twitter = "/images/twitter.png";
const Telegram = "/images/telegram.png";
const Reddit = "/images/reddit.png";
const Medium = "/images/medium.png";

const Social: React.FC = () => {
  const socials = [
    {
      name: "reddit",
      icon: Reddit,
      url: "https://www.reddit.com",
    },
    {
      name: "medium",
      icon: Medium,
      url: "https://www.medium.com",
    },
    {
      name: "twitter",
      icon: Twitter,
      url: "https://www.twitter.com",
    },
    {
      name: "telegram",
      icon: Telegram,
      url: "https://www.telegram.com",
    },
  ];
  return (
    <>
      <ul className="flex space-x-6">
        {socials?.map((social, idx) => (
          <li key={idx}>
            <Link href={social.url}>
              <a
                target="_blank"
                className="w-10 h-10 rounded-full border-2 border-gravityYellow flex items-center justify-center"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width="20"
                  height="20"
                  layout="intrinsic"
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Social;
