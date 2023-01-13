import React from "react";
import "../resources/css/Contact.css";
import "../resources/css/Header.css";
import {
  faEnvelope,
  faContactBook,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  return (
    <>
      <div className="w-100 h-auto">
        <div className="contact-banner">
          <div className="p-20 w-100 h-96 z-10 backdrop-opacity-10 bg-gray-600/40 flex text-white">
            <div>
              <h1 className="header text-3xl font-extrabold mb-10">
                Contact Us
              </h1>
              <div className="flex">
                <div className="bg-white rounded-full w-10 h-10 flex justify-center p-3 mb-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-lime-600"
                  />
                </div>
                <div className="p-2">KN@knownyourneighbour.com</div>
              </div>
              <div className="flex">
                <div className="bg-white rounded-full w-10 h-10 flex justify-center p-3 mb-3">
                  <FontAwesomeIcon
                    icon={faContactBook}
                    className="text-lime-600"
                  />
                </div>
                <div className="p-2">+95 92392392349</div>
              </div>
              <div className="flex">
                <div className="bg-white rounded-full flex justify-center p-3">
                  <FontAwesomeIcon icon={faMapPin} className="text-lime-600" />
                </div>
                <div className="p-2">Mandalay, Myanmar</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid-cols-3 lg:grid">
          <div className="bg-gradient-to-r from-lime-200 to-lime-600 w-full h-full">
            <div className="p-10">
              <h1 className="text-3xl font-bold header">
                Wait, Please Leave Your Feedback Here
              </h1>
              <p className="pt-9">
                Your comments are appreciated and recoginzed by KN teams.
                Together with you, KN can provides more valuable content and
                experience.
              </p>
            </div>
          </div>
          <div
            className="col-span-2 border-2 border-gray-500 lg:-mt-40 bg-white z-10
          rounded-t-lg p-5"
          >
            <h1 className="text-center text-2xl font-bold p-3">
              Poor Experience? Please leave your priceless feedback
              <FontAwesomeIcon
                icon={faMessage}
                className="ml-3 text-lime-500"
              />
            </h1>
            <form className="p-4">
              <div className="lg:flex lg:px-10 sm:p-2 justify-between">
                <label htmlFor="firstName">
                  <h1 className="pb-3">First Name</h1>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="border-2 border-lime-500 p-3 w-80 rounded-md shadow-lime-300 shadow-md"
                    placeholder="Enter Your First Name"
                  />
                </label>
                <label htmlFor="lastName">
                  <h1 className="pb-3">Last Name</h1>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="border-2 border-lime-500 p-3 w-96 rounded-md shadow-lime-300 shadow-md"
                    placeholder="Enter Your Last Name"
                  />
                </label>
              </div>
              <div className="lg:px-10 lg:py-4 sm:p-3">
                <label htmlFor="email">
                  <h1 className="pb-3">Email Address</h1>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 border-lime-500 p-3 w-full rounded-md shadow-lime-300 shadow-md"
                    placeholder="example@email.com"
                  />
                </label>
              </div>
              <div className="lg:px-10 sm:p-3">
                <label htmlFor="feedback">
                  <h1 className="pb-3">Feedback</h1>
                  <textarea
                    name="feedback"
                    id="feedback"
                    rows={4}
                    placeholder="Enter Your Priceless feedback ..."
                    className="border-2 border-lime-500 p-3 w-full rounded-md shadow-lime-300 shadow-md"
                  ></textarea>
                </label>
              </div>
              <div className="lg:px-10 sm:p-3">
                <button
                  type="submit"
                  className="border-2 border-lime-500 p-4 rounded-xl text-lime-500
                  hover:bg-lime-500 hover:text-white"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
