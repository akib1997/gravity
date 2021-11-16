import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Audits from "../components/Audits";
import Products from "../components/Products";
import Statistics from "../components/Statistics";
import Video from "../components/Video";
import Link from "next/link";
import TopBar from "../components/TopBar";
import { Images } from "../theme/images";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gravity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Header />
      <main className="px-4 py-20 text-center relative xl:overflow-visible overflow-hidden">
        <div className="absolute right-0 w-60 md:w-[513px] h-60 md:h-[513px] transform -top-24 z-0 sm:block hidden">
          <Image
            src={Images.LeftMiddle}
            alt="Left Middle"
            width="513"
            height="513"
            layout="responsive"
          />
        </div>
        <div className="absolute left-0 w-80 md:w-[700px] h-96 md:h-[1000px] transform rotate-8 top-1/5 z-0 sm:block hidden">
          <Image
            src={Images.RightTop}
            alt="Right Top"
            width="700"
            height="1000"
            layout="responsive"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="md:flex items-center justify-center">
            <Image
              src="/images/c-circle.png"
              alt="Gravity"
              width="135"
              height="135"
              layout="fixed"
            />
            <h1 className="uppercase text-2xl sm:text-5xl tracking-[3px] sm:tracking-[6px] md:tracking-[13px]">
              <span className="font-bold">Gravity</span>
              <p className="font-light pl-2 inline-flex">
                fin
                <span className="relative">
                  <Image
                    src={Images.Tringle}
                    alt="Tringle"
                    width="29"
                    height="28"
                    layout="fixed"
                    className="mr-1"
                  />
                  <span className="absolute w-7 h-48 sm:top-1.5 right-4">
                    <Image
                      src={Images.Line}
                      alt="Line"
                      width="41"
                      height="208"
                      layout="fixed"
                    />
                  </span>
                </span>
                <span className="sm:pl-2">nce</span>
              </p>
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold my-10">
            DeFi backed by <span className="text-gravityYellow">bitcoin</span>
          </h2>
          <div className="flex items-center justify-center my-8">
            <h4 className="text-xl sm:text-2xl font-light mr-1 tracking-[3px]  sm:tracking-[10px]">
              Built on
            </h4>
            <Image
              src="/images/polygon.png"
              alt="Gravity"
              width="150"
              height="33"
              layout="fixed"
            />
          </div>
          <h5 className="font-medium text-lg sm:text-xl mb-12">
            Trade, Earn Yield and join some of the most exciting projects coming
            to Polygon through our Launchpad.
          </h5>
          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl overflow-hidde">
              <Video />
            </div>
            <div className="grid sm:grid-cols-2 gap-2 mt-12">
              <Link href="/">
                <a className="border-2 border-gravityYellow px-4 py-2 text-white rounded-lg flex items-center justify-center space-x-2">
                  <Image
                    src="/images/gravity.png"
                    alt="Gravity"
                    width="15"
                    height="15"
                    layout="fixed"
                  />
                  <span>Launch App</span>
                </a>
              </Link>
              <Link href="/">
                <a className="border-2 border-gravityYellow px-4 py-2 text-white rounded-lg">
                  Read Docs
                </a>
              </Link>
            </div>
          </div>
          <Statistics />
        </div>
        <div className="max-w-4xl mx-auto">
          <Products />
        </div>
        <div className="max-w-3xl mx-auto">
          <Audits />
          <Partners />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
