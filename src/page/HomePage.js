import React from "react";
import Layout from "../components/Layout";
import iphoneImage from "../../src/iphoneImage.png";
import iphonePink from "../../src/iPhone-13-Pink.png";
function HomePage() {
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-1 justify-center items-center">
          {/* Home Page Header */}
          <p className="text-center p-3 bg-[#F5F5F7] text-sm md:px-16 text-gray-700">
            <span className="text-blue-500 hover:underline">Shop online</span> and get Specialist help, free delivery, and more. Some of our stores
            are offering limited services. Before you visit, please check your <span className="text-blue-500 hover:underline">
              store’s services
            </span>
          </p>
          {/* Ipone 13 Pro */}
          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center p-6 md:p-3">
                <h1 className="text-black text-5xl md:text-3xl font-semibold">
                  iPhone 13 Pro
                </h1>
                <h1 className="text-black text-2xl md:text-xl p-5 md:p-2">
                  Oh. So. Pro.
                </h1>
                <h1 className="text-blue-500 font-medium text-lg">
                  Learn more &#62; &ensp; Buy &#62;
                </h1>
              </div>
              <img className="h-96 md:h-48 w-fit" src={iphoneImage}></img>
            </div>
          </div>
          {/* Iphone 13 Pink Varient */}
          <div className="bg-[#35283C]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center p-6 md:p-3">
                <h1 className="text-white text-5xl md:text-3xl  font-semibold">
                  iPhone 13
                </h1>
                <h1 className="text-pink-400 text-2xl md:text-xl p-5 md:p-2">
                  Your new superpower
                </h1>
                <h1 className="text-blue-500 font-medium text-lg">
                  Learn more &#62; &ensp; Buy &#62;
                </h1>
              </div>
              <img className="h-96 md:h-56 w-fit" src={iphonePink}></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
