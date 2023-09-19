import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            <div className=" sm:text-center">
              <h1 className=" text-3xl font-semibold leading-8 text-gold">
                Discover Cryptocurrency
              </h1>
              <p className=" mt-2 text-3xl font-bold tracking-tighter text-gray-700 sm:text-4xl">
                Digital money for a digital world.
              </p>
              <p className="  mx-auto ml-6  text-lg leading-8 text-gray-600">
                Cryptocurrencies ar digital or virtual currencies that use
                cryptography for security and are decentralized, meaning the are
                not controlled by any goverment or financial institution
              </p>
            </div>

            {/* Main content - crypto cards */}
            <Ticker />

            <div className=" mt-20 py-4 text-center">
              <p className=" text-gray-400"> Powered by</p>
              <a
                href="https://github.com/masudfcs1"
                className=" underline text-indigo-500"
                target="_blank"
                rel="  noreferrer"
              >
                masudfcs1
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
