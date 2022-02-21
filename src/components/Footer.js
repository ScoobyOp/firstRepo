import React, { useState } from "react";
import { FooterItems } from "../FooterItems";


function Footer() {
  const [sectionId, setSectionId] = useState(false);

  const toggleSection = (index) =>{
    if(sectionId == index){
      // close the section, if it is open.........
      setSectionId(null)
    }else{
      setSectionId(index)
    }

  }
  const styles = {
    section: {
      maxHeight: "0",
      overflow:"hidden",
      transition: "max-height 1.2s ease-in",
     
    },
    expand:{
      transition: "max-height 0.9s linear",
      maxHeight:"500px"
    }
  };

  return (
    <div>
      <div className="bg-[#F5F5F7]  pt-3">
        {/* Paragaraph Information */}
        <div className="text-gray-500 text-xs px-48 md:p-2">
          <div className="pb-2">
            1. Trade-in values vary. Extra trade-in values apply only to Apple
            Watch Series 6, SE, Series 5, Series 4, Series 3, Series 2, and
            require purchase of a new Apple Watch, subject to availability and
            limits. Must be at least 18 years old. Apple or its trade-in
            partners reserve the right to refuse or limit any trade-in
            transaction for any reason. In-store trade-in requires presentation
            of a valid, government-issued photo ID (local law may require saving
            this information). Sales tax may be assessed on full value of new
            Apple Watch. Additional terms from Apple or Apple’s trade-in
            partners may apply.
          </div>
          <div className="pb-2">
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with the latest version of iOS
            or iPadOS. Update to the latest version by going to Settings &#62;
            General &#62; Software Update. Tap Download and Install.
          </div>
          <div className="pb-2">
            Available for qualifying applicants in the United States.
          </div>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          <div className="pb-2">
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </div>
          <div>
            Learn more ab Apple TV+ is $4.99/month after free trial. One
            subscription per Family Sharing group. Offer good for 3 months after
            eligible device activation. Plan automatically renews until
            cancelled. Restrictions and other terms apply.
          </div>
        </div>
        <div className="py-4 px-48 md:p-2">
          <hr className=" border-gray-300 border-1"></hr>
        </div>
        {/* This Footer Information will not be visible for Mobile view  */}
        <div className="grid grid-cols-5 pb-6 px-48 md:hidden">
          {FooterItems.map((item) => {
            return (
              <div>
                <h1 className="text-gray-900 text-xs font-semibold pb-3">
                  {item.title}
                </h1>
                {item.data.map((info) => {
                  return (
                    <li className="list-none text-gray-500 text-xs pb-2">
                      {info}
                    </li>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/* This Footer information will not be visible for Desktop view */}
      <div className="bg-[#F5F5F7] pt-3 px-3 lg:hidden xl:hidden 2xl:hidden md:flex flex-col" >
      {/* Accordian */}
      {FooterItems.map((item, index) => {
            return (
              <div className={`border-b border-gray-300`}>
                <div className=" bg-[#F5F5F7] pl-1 grid text-gray-500">
                  <div>
                    <span className="text-xs hover:text-gray-600">
                      {item.title}
                    </span>
                    <span
                      key={index}
                      onClick={() => {
                        toggleSection(index);
                      }}
                      className="text-gray-500 text-lg cursor-pointer float-right"
                    >
                      {sectionId === index ? "-" : "+" }
                    </span>
                  </div>
                </div>
                <div style={sectionId === index  ? styles.expand :styles.section}>
                {sectionId === index ? (
                  <div>
                    {item.data.map((info) => {
                      return (
                        <li
                          className={`pl-3 p-2 list-none bg-[#F5F5F7] text-gray-500 text-xs transition-all delay-300 `}
                        >
                          {info}
                        </li>
                      );
                    })}
                  </div>
                ) : null}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Footer;
