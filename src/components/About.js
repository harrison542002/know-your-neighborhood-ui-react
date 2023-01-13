import React from "react";

import "../resources/css/About.css";
import "../resources/css/Header.css";
import Certify from "../resources/img/certify.png";
export default function About() {
  return (
    <>
      <div className="w-100 h-96">
        <div className="about-banner relative">
          <div className="w-100 h-96 z-10 backdrop-opacity-10 bg-gray-600/40 flex justify-center">
            <h1 className="header text-white text-3xl font-extrabold bottom-24 absolute border-b-4 border-double">
              ABOUT KN COMPANY
            </h1>
            <p className="text-white font-bold bottom-12 absolute px-2 pt-2">
              KN is a company provides communities the best approach to find
              stores.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 bg-gradient-to-r from-lime-600 to-lime-100">
        <div className="relative">
          <img
            src={Certify}
            alt="certification icon"
            className="w-2/3 lg:ml-44"
          />
        </div>
        <div className="p-8">
          <h1 className="header text-2xl font-extrabold text-white mt-4">
            Officially certified BY USA
          </h1>
          <p className="mt-4 text-white mr-52">
            We are happy announced that our company, KN, has been offically
            recoginzed and certified by US gorvernment. Due to KN expert level
            of investigation from each employees, KN has been grow widely year
            by year.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold p-5 ">
          Event Hightlights
        </h1>
      </div>
      <div className="event lg:grid lg:grid-cols-3 w-100 gap-4 p-2 mb-5">
        <div className="event1 rounded-lg shadow-md mb-2">
          <div
            className="parent transition-all transform w-100 h-96 z-10 hover:backdrop-opacity-10 hover:bg-gray-900/40 
           flex justify-center hover:ease-in-out hover:delay-150 rounded-lg hover:duration-700"
          >
            <h1
              className="child transition mt-80 text-white text-2xl font-bold hover:duration-700
            hover:ease-in-out hover:delay-150"
            >
              Skate Board Event
            </h1>
          </div>
        </div>
        <div className="event2 col-span-2 rounded-lg shadow-md">
          <div
            className="parent transition-all transform w-100 h-96 z-10 hover:backdrop-opacity-10 hover:bg-gray-900/40 
           flex justify-center hover:ease-in-out hover:delay-150 rounded-lg hover:duration-700 shadow-md"
          >
            <h1
              className="child transition mt-80 text-white text-2xl font-bold hover:duration-700
            hover:ease-in-out hover:delay-150"
            >
              Uplifting Talk From Google Developer In KN
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
