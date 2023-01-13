import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="lg:grid grid-cols-3 bg-gray-900 text-white">
        <div className="p-10">
          <h1 className="font-bold text-lg">Additional Information</h1>
          <div className="mt-3">
            <Link to={"/about"} className="block pb-2 hover:text-gray-500">
              About Us
            </Link>
            <Link to={"/contact"} className="block pb-2 hover:text-gray-500">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="p-10">
          <h1 className="font-bold text-lg">Policy</h1>
          <div className="mt-3">
            <Link to={"/terms"} className="block pb-2 hover:text-gray-500">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="p-5 text-center bg-gray-900 text-gray-400">
        Copyright All rights deserved by KN
      </div>
    </>
  );
}

export default Footer;
