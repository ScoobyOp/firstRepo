import React from 'react';
import Layout from "../components/Layout";
import PUBG from "../../src/pubg.jpg";

function PubgPage() {
  return (
    <Layout>
    <div>
    <div className="grid grid-cols-1">
            <div className="flex flex-col items-center justify-center">
              <div className="text-center p-6 md:p-3">
                <h1 className="text-black text-5xl md:text-3xl font-semibold">
                 Battle Ground India
                </h1>
                <h1 className="text-black text-2xl md:text-xl p-5 md:p-2">
                 I.N.S.A.N.E
                </h1>
              </div>
              <img className="h-96 md:h-48 w-fit" src={PUBG}></img>
            </div>
          </div>
    </div>
  </Layout>
  )
}

export default PubgPage